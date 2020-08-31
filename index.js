const { Client, MessageEmbed } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');
const ms = require('ms');
const numeral = require('numeral');
const { config } = require('dotenv');
config({
    path: __dirname + '/.env',
});

const client = new Client({
    disableMentions: 'everyone'
});

client.on('ready', () => {
    console.log(`Bot ${client.user.tag} is ready!`);
    async function startLoop() {
        const { loopEvery, type, threshold, ownerID } = require('./config.json');
        const typeCheck = ['up', 'down'];
        if (!typeCheck.includes(type.toLowerCase())) throw new Error('Type should be "up" or "down"');
        if (!loopEvery) throw new Error('loopEvery can not be empty');
        if (!ms(loopEvery)) throw new Error('loopEvery is invalid!'); 
        const owner = client.users.cache.get(ownerID);
        if (!owner) throw new Error('Invalid ownerID'); 
        const res = await axios.get('https://coinmarketcap.com/currencies/bitcoin/');
        const $ = cheerio.load(res.data);
        let price = $("#__next > div > div.container.cmc-main-section > div > div > div > div > div > span:nth-child(1)").text();
        const presentage = $("#__next > div > div.container.cmc-main-section > div > div > div > div > div > span:nth-child(2)").text().trimLeft();
        price = numeral(price).value();
        const embed = new MessageEmbed();
        if (type.toLowerCase() == 'up' && price > threshold) {
            embed.setTitle('Hey! The price of Bitcoin is higher then your threshold')
                .addField('Price now: ', `${price} USD ${presentage}`)
            await owner.send(embed);
        } else if (type.toLowerCase == 'down' && price < threshold) {
            embed.setTitle('Hey! The price of Bitcoin is lower then your threshold')
                .addField('Price now: ', `${price} USD ${presentage}`)
            await owner.send(embed);
        }
        setTimeout(startLoop, ms(loopEvery))
    }
    startLoop();
})

if (process.env.TYPE_RUN !== 'ci') client.login(process.env.TOKEN);
else process.exit();