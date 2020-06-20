const discord = require("discord.js")

const botConfig = require("../botconfig.json")


module.exports.run = async(bot, message, args) => {

    const c = bot.channels.cache.get("720642251738316860");

    var prefix = botConfig.prefix;

    var item = message.content.slice(6); 

        if (!item) {

            var noSuggestEmbed = new discord.MessageEmbed()
                .setTitle("❌ Geef een idee mee!")
                .setDescription("Zonder idee kan ik niets sturen!")
                .setColor("#0000ff")
            return message.channel.send(noSuggestEmbed);
        }
    

        var suggestEmbed = new discord.MessageEmbed()
            .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag, message.author.displayAvatarURL())
            .setColor("#ffd700")
            .setTitle("Nieuwe idee!")
            .setDescription(item)
            .setThumbnail(bot.user.displayAvatarURL())
            .setTimestamp()
            .setFooter("Idee", bot.user.displayAvatarURL())
            c.send(suggestEmbed).then((message) => {
    
            const sent = message;
            sent.react(`👍`).then(() => {
                sent.react(`👎`)
            })
    
        })
    }


module.exports.help = {
    name: "idee"
}