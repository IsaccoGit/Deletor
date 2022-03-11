require("dotenv").config()
global.Discord = require("discord.js");
global.client = new Discord.Client({
    intents: 32767,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});