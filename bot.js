const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");

client.login(config.Token);

fs.readdir("./Events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
})

client.on('message', msg => {
  if(!msg.content.startsWith(config.Prefix)) return;
  if(msg.author.bot) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.Prefix.lenght);

  let args = msg.content.split(" ").slice(1);

  try {
    let commandFile = require(`./Commands/${command}.js`);
    commandsFile.run(client, message, args);
  } catch(err) {
    console.log(err);
  }
});
