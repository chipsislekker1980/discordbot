const discord = require("discord.js")
const botConfig = require("./botConfig.json")
const c = client.channels.cache.get("720642251738316860");

module.exports.run = async(bot, message, args) => {

    var prefix = botConfig.prefix;

    var item = message.content.slice(6);


        if (!item) {

            var noSuggestEmbed = new discord.MessageEmbed()
                .setTitle("❌ Geef een idee mee!")
                .setDescription("Zonder idee kan ik niets sturen!")
                .setColor("#0000ff")
            return message.channel.send(noSuggestEmbed);
        }
    
        /////////////////////////
    
        var suggestEmbed = new discord.MessageEmbed()
            .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag, message.author.displayAvatarURL())
            .setColor("#ffd700")
            .setTitle("Nieuwe idee!")
            .setDescription(item)
            .setThumbnail(bot.user.displayAvatarURL())
            .setTimestamp()
            .setFooter(" | Clearance idee systeem |", bot.user.displayAvatarURL())
        c.send(suggestEmbed).then((message) => {
    
            const send = message;
            sent.react(`👍`).then(() => {
                sent.react(`👎`)
            })
    
        })
    }


module.exports.help = {
    name: "idee"
}