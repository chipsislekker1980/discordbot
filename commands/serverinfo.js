const discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    
    var embed = new discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("**__Server informatie__**")
    .setDescription("Hier staat als het informatie van de server!")
    .setThumbnail("https://imgur.com/9lPvrTz.png")
    .addField("Server informatie", [
         `**> Servernaam:** ${message.guild.name}`
         `**> Eigenaar:** ${message.guild.owner.user.tag}`
         `**> Gemaakt op:** ${message.guild.createdAt}`
         `**> Gejoind op:** ${message.guild.MessageAuthor.joinedAt}`
         `**> Aantal rollen:** ${message.guild.roles}`
    ])

}

   
module.exports.help = {
    name: "serverinfo"
}