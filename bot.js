const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.Token);

client.on('ready', () => {
  console.log("I'm ready to rock");
});

client.on('message', msg => {
  if(!msg.content.startsWith(config.prefix)) return;
  if(msg.author.bot) return;

  if (msg.content.startsWith(config.prefix + 'ping')){
    msg.reply('pong');
  }
});
