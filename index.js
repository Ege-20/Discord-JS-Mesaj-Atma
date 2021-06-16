const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Giriş yapıldı: ${client.user.tag}!`);
});

client.on('message' message => {
    if(message.content === 'Merhaba')
//isterseniz message.reply('<mesaj>') yada message.channel.send('<mesaj>') kullanabilirsiniz.
message.reply('Merhaba!');
})

client.login('token buraya');
