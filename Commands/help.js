exports.run = (client, message, args) => {
  message.author.sendEmbed({
    color: 3447003,
    author: {
      name:client.user.username,
      icon_url: client.user.avatarURL
    },
    description:
     'Esto es una prueba espero que funcione de manera adecuaca'
  });
};
