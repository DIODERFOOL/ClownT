const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.Token);

client.on('ready', () => {
  console.log("I'm ready to rock");
});

client.on('guildMemberAdd', member =>{

});

client.on('message', msg => {
  if(!msg.content.startsWith(config.prefix)) return;
  if(msg.author.bot) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.lenght);

  let args = msg.content.split(" ").slice(1);

  if (command === "ping"){
    msg.reply('pong');
  }
});
