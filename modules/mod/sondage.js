var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
function sondage(message, bot, args) {
  if (message.content.startsWith(prefix + "sondage")) {
    let react = args[1];
    let question = args.slice(2).join(" ");
    message.reply(`..`)
    //message.channels.find('name' `${salons}`).send(`Test : ${salons} ${react} ${question}`)
}}
module.exports = sondage;