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

  setInterval(() => {
    client.say('BaityBait', '¡Hola!');
  }, 4 * 60 * 1000);
});

