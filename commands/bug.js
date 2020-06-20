const discord = require("discord.js")

const botConfig = require("../botconfig.json")

const bot = new discord.Client();

module.exports.run = async(bot, message, args) => {

    const c = bot.channels.cache.get("720642241030389801");

    var prefix = botConfig.prefix;

    var item = message.content.slice(5); 

        if (!item) {

            var noSuggestEmbed = new discord.MessageEmbed()
                .setTitle("❌ Geef een bug mee!")
                .setDescription("Zonder bug kan ik niets sturen!")
                .setColor("#0000ff")
            return message.channel.send(noSuggestEmbed);
        }
    

        var suggestEmbed = new discord.MessageEmbed()
            .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag, message.author.displayAvatarURL())
            .setColor("#ffd700")
            .setTitle("Nieuwe bug!", message.author.tag)
            .setDescription(item)
            .setThumbnail(bot.user.displayAvatarURL())
            .setTimestamp()
            .setFooter(" | Bug commando. |", bot.user.displayAvatarURL())
            c.send(suggestEmbed).then((message) => {
    
       
            })
    
        }
    


module.exports.help = {
    name: "bug"
}