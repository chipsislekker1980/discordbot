const discord = require("discord.js")
const botConfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply('je hebt niet de goeie permissie om dit te doen. Je hebt de ``BAN_MEMBERS`` permissie nodig.');

    
    var categoryID = args[1]

    if(!categoryID) return message.reply("Dit kanaal is niet gevonden.")


}

module.exports.help = {
    name: "setupticket"
}   