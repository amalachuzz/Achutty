const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/3cdb1ef0595123f13352c.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Achutty*

*Creator number : wa.me/917591973073?text=Hi%20Achutty%20❣️.%20*

 *To check update .update   To update Bot .update now*

  *Instagram id: https://cutt.ly/yYVJ148*

 *Yt_PASSWORD: _________(for password contact owner)*

 *githublink : https://github.com/amalachuzz/Achutty*
`}) 

}));
