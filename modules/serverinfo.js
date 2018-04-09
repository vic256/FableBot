const Discord = require('discord.js')
var prefix = process.env["Prefix"]

function serverinfo(message, bot) {
    if(message.content.startsWith(prefix+"si")) {
          message.channel.send('', {
              embed: new Discord.RichEmbed()
              .setAuthor(`Information sur le serveur ${message.guild.name}.`)
              .setThumbnail(message.guild.iconURL)
              .addField("Nom", message.guild.name)
              .addField("Membre(s)", message.guild.memberCount)
              .addField("Salon", message.guild.channels.size)
              .addField("Emojis", message.guild.emojis.size)
              .addField("Role", message.guild.roles.size)
              .addField("ID", message.guild.id)
              .addField("Salon AFK", message.guild.afkChannel)
              .addField("Région", message.guild.region)
              .addField('Niveau de verification', message.guild.verificationLevel)
              .addField('Propriètère du serveur', "@"+ message.guild.owner.user.tag)
              .setFooter(/*bot.user.avatarURL, */"ThEpicBOT | Bot officiel de la ThEpicCommunity")
              .setColor("#FAE901")
          });
    }
  
   if(message.content.startsWith(prefix+"serverinfo")) {
          message.channel.send('', {
              embed: new Discord.RichEmbed()
              .setAuthor(`Information sur le serveur ${message.guild.name}.`)
              .setThumbnail(message.guild.iconURL)
              .addField("Nom", message.guild.name)
              .addField("Membre(s)", message.guild.memberCount)
              .addField("Salon", message.guild.channels.size)
              .addField("Emojis", message.guild.emojis.size)
              .addField("Role", message.guild.roles.size)
              .addField("ID", message.guild.id)
              .addField("Salon AFK", message.guild.afkChannel)
              .addField("Région", message.guild.region)
              .addField('Niveau de verification', message.guild.verificationLevel)
              .addField('Propriètère du serveur', "@"+ message.guild.owner.user.tag)
              .setFooter(/*message.guild.iconURL,*/ "ThEpicBOT | Bot officiel de la ThEpicCommunity")
              .setColor("#FAE901")
          });
   }
  
}
module.exports = serverinfo;