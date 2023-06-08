const tmi = require('tmi.js');

const client = new tmi.Client({
  identity: {
    username: 'andrespz07',
    password: 'oauth:pnac0kwm83bt1ynpmjbeqzjxachqyn'
  },
  channels: ['andrespz07']
});

client.connect();

client.on('connected', () => {
  console.log('El bot se ha conectado al chat de Twitch');

  setInterval(() => {
    client.say('BaityBait', 'DoritosChip');
  }, 1 * 60 * 1000);
});

