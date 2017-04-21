exports.run = (client, message, args) => {
  var messagesToDelete = 100;
  client.sweepMessages([messagesToDelete]);
}
