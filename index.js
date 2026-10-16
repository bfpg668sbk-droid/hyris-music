const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Hyris Music đã online: ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
