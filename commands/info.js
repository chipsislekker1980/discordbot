const discord = require("discord.js")

const botConfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    
var prefix = botConfig.prefix

var embed = new discord.MessageEmbed()
    .setTitle("Informatie")
    .setThumbnail("https://imgur.com/9lPvrTz.png")
    .setDescription("**__Clearance__** \n\n ```!help``` \n Met de !help command kan je zien welke commands er zijn! \n \n ```!say (titel), (bericht), (kanaal, zonder #) ``` \n Deze commando gebruik je voor een mededeling. Let op: om het commando uit te voeren moet je de permissie KICK_MEMBERS hebben. De streepjes moeten er ook bij. \n ```!clear (hoeveelheid)``` \n Deze command wordt gebruikt om makkelijk een aantal berichten te verwijderen. Om dit te kunnen doen, heb je de permissie MANAGE_MESSAGES nodig. \n ```!kick @user reden``` \n Deze commando gebruik je als je iemand wilt kicken. Je hebt de KICK_MEMBERS permissie nodig om dit te doen. \n ```!ban @user reden``` \n Deze command wordt gebruikt om mensen te bannen. Je hebt de BAN_MEMBERS permissie nodig. \n ```!giveaway tijd (h, d, m) #kanaal prijs``` \n Deze commando wordt gebruikt om een giveaway te starten. Het kan zijn dat de tijd nog niet bij de giveaway zelf staat. Dit wordt dan nog gefixt. Voor de tijd moet je m(minuut) day (dag) hour (uur) of mond(maand) invoeren. Als je het bijvoorbeeld voor 1 uur wil zet je 1h bij tijd. Je heb de ``KICK_MEMBERS`` permissie nodig om dit te doen. \n \n **Meer commands in aanmaak!**")
    .setColor("BLUE")
    .setFooter("Clearance commands")
    return message.channel.send(embed)

}


module.exports.help = {
    name: "info"
}

