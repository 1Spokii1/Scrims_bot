const fs = require('fs-extra')
const {Client, RichEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete()
    if (message.member.roles.find(r => r.id == 667772960945340477) // доступ Администратор
    || message.member.roles.find(r => r.id == 671326162575818795) // доступ Тех.Администратор
    ){ 
message.channel.send(`@everyone`)
const embed = new RichEmbed()
.setColor('#000080')
    .setTitle('Группа Вконтакте')
    .setURL('https://vk.com/competitivescrims')
    .setAuthor('Competitive Scrims|PUBG Lite', 'https://sun9-42.userapi.com/c857424/v857424458/15ac65/g4QX62IK4HI.jpg')
    .setDescription('**MVP дня.**')
    .setImage('https://media.discordapp.net/attachments/667791906616639520/672181723106246667/fdg.png?width=473&height=473')
    .setTimestamp()
    .setFooter('Администрация', 'https://sun9-42.userapi.com/c857424/v857424458/15ac65/g4QX62IK4HI.jpg');
message.channel.send(embed);
}

}
module.exports.help = {
    name: 'ad'
}
