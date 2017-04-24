exports.run = (client, message, args) => {
  message.author.sendEmbed({
    color: 3447003,
    author: {
<<<<<<< HEAD
      name:client.user.username,
      icon_url: client.user.avatarURL
    },
    description:
     'Esto es una prueba espero que funcione de manera adecuaca'
=======
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'This is an embed',
    url: 'http://google.com',
    description: 'This is a test embed to showcase what they look like and what they can do.',
    fields: [{
        name: 'Fields',
        value: 'They can have different fields with small headlines.'
      },
      {
        name: 'Masked links',
        value: 'You can put [masked links](http://google.com) inside of rich embeds.'
      },
      {
        name: 'Markdown',
        value: 'You can put all the *usual* **__Markdown__** inside of them.'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Discord bot'
      
    }
>>>>>>> ca5c51b1fefdf15eef961d972d14d005a1ae8459
  });
};
