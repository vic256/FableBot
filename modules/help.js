var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
const Discord = require("discord.js")
function help(message, bot, args) {
  if(message.content.startsWith(prefix + "help")) {
    //----AUCUN ARGUMENT----//
    let command = args[0]
    if(!args) {
      message.reply('page d\'aide envoyée en MP/DM :envelope_with_arrow:  ! ')
        message.author.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Liste des commandes : ",
        description: "Toutes les commandes commence par [w!]",
        fields: [{
            name: "FUN :",
            value: "**w!gif :** Recherche un gif.\n**w!test :** Te dis si le bot fonctionne."
          },
          {
            name: "Utile",
            value: "**w!help :** Affiche le message d'aide.\n**w!serverinfo :** Indique les information du serveur.\n**w!stats :** EN MAINTENANCE !\n**w!invite :** Donne l'invitation du bot"
          },
          {
            name: "Moderation",
            value: "**w!clear [nombre] :** Clear le nombre de message choisis."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: footer
        }
      }
      });
    //----AUCUN ARGUMENT----//
    } else if(command === ("gif" | "w!gif")) { //GIF
      embed: new Discord.RichEmbed()
      .setTitle("Commande GIF")
      .setDescription("Aliase : Aucun\n")
      .setField("Utilisation : w!gif")
      .setFooter(footer)
      .setColor("#fffff")
    }
  }
}
module.exports = help;  