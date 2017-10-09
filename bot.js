const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MzY2NzE5Mzg2OTc3MDQyNDMz.DLzElg.zgj02y8_d7PN8j6AhuRGk3WI2c4');
