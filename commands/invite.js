const discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

try{

    var text = "Hey, leuk dat je Clearance wilt inviten in je server! Hier is de link: https://discord.com/oauth2/authorize?client_id=720882384941350983&scope=bot \n \n **Support server: https://discord.gg/5zycST8**";

    message.author.send(text);

    message.reply("Bekijk je dms!")
    
}catch(error){
    message.reply("Er is iets fout gelopen")
}

}

module.exports.help = {
    name: "invite"
}