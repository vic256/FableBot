var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
function say(message, bot, args) {
let modRole = "MANAGE_MESSAGES"
  if (message.content.startsWith(prefix + "say")) {
     if(message.member.permissions.has(modRole)) { //Récupère les droits nécessaires
      let message0 = args.slice(0).join(" ");
      message.channel.send(message0)
      message.delete(message.author)

      } else message.reply('Vous n\'avez pas la permission d\'éxécuter cette commande !')
}}
module.exports = say;