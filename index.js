const Discord = require('discord.js');
const client = new Discord.Client( { disableMentions: "all" } );
require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login(OTU5MTE1MTU2NDY4Njc4NzA2.YkXLmA.qm3Yj688vCitpyuq7iakzq2Bxxw);
