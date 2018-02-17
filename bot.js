const Discord = require(‘discord.js’);
const cilent = new Discord.Cilent();

cilent.on(‘ready’, () => {
     console. log(‘I am ready!’);
     });
     
     cilent.on(‘message’, message => {
          if (message.content === ‘ping’) {
            message.reply(‘pong’);
          }
            });
            
// THIS MUST BE THIS WAY
cilemt.login(process.env.BOT_TOKEN);
