var footer = process.env["Footer"]
var prefix = process.env["Prefix"]
function joinleave(message, bot, settings) {
  bot.on("guildMemberAdd", member => {
  const guildConf = settings.get(member.guild.id);
  const welcomeMessage1 = guildConf.welcomeMessage
  const welcomeMessage2 = guildConf.welcomeMessage.replace("{user}", member.user.tag)
    if(welcomeMessage1 === "ON") {
      member.guild.channels.find("name", guildConf.welcomeChannel).send(welcomeMessage2).catch(console.error);
    }  
});
}
module.exports = joinleave;