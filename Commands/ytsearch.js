const discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    var url = "https://youtube.googleapis.com/youtube/v3/search?q="+args+"&safeSearch=safeSearchSettingUnspecified&videoEmbeddable=videoEmbeddableUnspecified&key="+config.key;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var num = 0;
            while (!data.items[num].id.videoId) {
                num++;
            }
            message.channel.send("https://www.youtube.com/watch?v="+data.items[num].id.videoId);
        });
}
module.exports.help = {
    name: "ytsearch"
}