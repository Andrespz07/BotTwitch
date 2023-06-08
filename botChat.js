const tmi = require('tmi.js');

const client = new tmi.Client({
  identity: {
    username: 'andrespz07',
    password: 'oauth:pnac0kwm83bt1ynpmjbeqzjxachqyn'
  },
  channels: ['andrespz07']
});

client.connect();

client.on('connected', (address, port) => {
    client.action('andrespz07', `Hola andrés conectado a ${address}:${port}`)
  console.log('El bot se ha conectado al chat de Twitch');

  // Lógica para enviar un mensaje cada 4 minutos
  setInterval(() => {
    client.say('el_yuste', '¡Hola!');
  }, 4 * 60 * 1000); // Intervalo de 4 minutos en milisegundos
});

// client.on('chat', (channel, user, message, self) => {
//   // Aquí puedes agregar la lógica para responder a mensajes específicos del chat.
//   // Por ejemplo, si alguien escribe "!saludo", el bot puede responder con un saludo.

//   if (message === '!saludo') {
//     client.say(channel, `¡Hola, ${user.username}! ¿Cómo estás?`);
//   }
// }
// );
