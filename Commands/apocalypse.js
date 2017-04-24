exports.run = (client, message, args) => {
  message.channel.bulkDelete(50);
  message.channel.sendMessage(":fire:" + " Borrado ALV " + ":fire:")
}
