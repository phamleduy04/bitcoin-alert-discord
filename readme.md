# bitcoin-alert-discord
Simple discord bot to alert when the price of bitcoin is higher than or lower than the threshold.

![GitHub top language](https://img.shields.io/github/languages/top/phamleduy04/bitcoin-alert-discord?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/phamleduy04/bitcoin-alert-discord?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/phamleduy04/bitcoin-alert-discord?style=for-the-badge)
![David](https://img.shields.io/david/phamleduy04/bitcoin-alert-discord?style=for-the-badge)
![Travis (.org)](https://img.shields.io/travis/phamleduy04/bitcoin-alert-discord?label=travis&logo=travis&style=for-the-badge)
[![Visits Badge](https://badges.pufler.dev/visits/phamleduy04/bitcoin-alert-discord?style=for-the-badge)](https://badges.pufler.dev)


## Installation
- Clone this repo (git clone https://github.com/phamleduy04/bitcoin-alert-discord.git)
- Edit config.json
    - threshold: The amount will trigger the alert
    - type: "up" or "down". up means if the price of bitcoin is higher than threshold then you got the alert (same with down)
    - loopEvery: time the instance will check the price. (5s, 10m, 1h, 1d, etc...)
    - ownerID: your discord ID
```json
{
    "threshold": 11000,
    "type": "up",
    "loopEvery": "1m",
    "ownerID": "455935236262592512"
}
```
- rename `example.env` to `.env`
- Edit `.env` file
    - Token is at [Discord Developer](https://discord.com/developers/applications)
    - Create a applications then add a bot -> copy token
```env
TOKEN=YOUR_TOKEN_HERE
```
- Open terminal or cmd at the folder then run `node index.js`

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/phamleduy04"><img src="https://avatars2.githubusercontent.com/u/32657584?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Duy Pham Le</b></sub></a><br /><a href="https://github.com/phamleduy04/bitcoin-alert-discord/commits?author=phamleduy04" title="Code">💻</a> <a href="https://github.com/phamleduy04/bitcoin-alert-discord/issues?q=author%3Aphamleduy04" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!