const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require('./config.json')
bot.login(config.token)
var prefix = config.Prefix
const express = require('express');
const app = express();
const http = require("http")
//var economy = require('discord-eco');

/*GLITCH
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 20000);
/*GLITCH*/

/*READY*/
bot.on("ready", ready => {
  console.log("Prêt!")
  bot.user.setPresence({ game: { name: 'MAJ !', type: 'LISTENING'} , status: 'online'})
});
/*READY*/

/*ENMAP-CONFIG*/
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const settings = new Enmap({provider: new EnmapLevel({name: "settings"})});
/*ENMAP-CONFIG*/

const defaultSettings = {
  prefix: "f!",
  welcomeMessage1: "OFF",
  welcomeMessage2: "/"
}

/*RICH PRESCENCE
//const client = require('discord-rich-presence')('427887388396879883');
const { Client } = require('discord-rpc/browser');
const clientID = '427887388396879883';
const scopes = ['rpc', 'rpc.api', 'messages.read'];
 
/*client.updatePresence({
  state: 'slithering',
  details: '🐍',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'snek_large',
  smallImageKey: 'snek_small',
  instance: true,
});*/


/*CONST COMMANDES "MAJ"*/
const test = require('./modules/test.js')
const hh = require('./modules/hh.js')
const invitation = require('./modules/invitation.js')
const serverinfo = require('./modules/serverinfo.js')
const clearmessage = require('./modules/mod/clearmessage.js')
const gif = require('./modules/fun/gif.js')
const evalcode = require('./modules/owners/evalcode.js')
const say = require('./modules/fun/say.js')
const musique = require('./modules/musique.js')
const giftxt = require('./modules/fun/giftxt.js')
const sondage = require('./modules/mod/sondage.js')
const joinleave = require('./modules/joinleave.js')
/*CONST COMMANDES*/

/*DETECTION COMMANDE "MAJ"*/
bot.on("message", message => {
  //var prefix = guildConf.prefix
  //const guildConf = settings.get(message.guild.id);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //Commande
  test(message, bot, prefix);
  hh(message, bot, prefix);
  serverinfo(message, bot, prefix)
  clearmessage(message, bot, args, prefix)
  gif(message, bot, args, prefix)
  invitation(message, bot, prefix)
  evalcode(message, bot, args, prefix)
  say(message, bot, args, prefix)
  musique(message, bot, args, prefix)
  giftxt(message, bot, prefix)
  sondage(message, bot, args, prefix)
  joinleave(message, bot, settings, prefix)
 });
/*DETECTION COMMANDE*/












bot.on("message", message => {
  /*var prefix = guildConf.prefix
  const guildConf = settings.get(message.guild.id);*/
  //f (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
try {
bot.channels.get('428210106245840896').send("", {
 	      embed: new Discord.RichEmbed()
 	   	  .setTitle("Un utilisateur a utilisé une commande!")
 		    .setDescription(`${message.author.tag} a utilisé la commande ${command} dans ${message.guild.name}! \nContenu du message : \n${message.content}`)
 		    .setColor("#ff0000")
        .setTimestamp()
 	     })
} catch (err) {
      console.error(err);
      message.reply("Une erreur c'est produite, elle sera corrigé prochainement")
      bot.channels.get('428210125510017024').send("", {
 	      embed: new Discord.RichEmbed()
 	   	  .setTitle(":x: Une erreur a était rencontrée :x:")
 		    .setDescription(err)
 		    .setColor("#ff0000")
        .setTimestamp()
        .setFooter(`Voici le tag de cette personne ${message.author.tag}`)
 	     });
}
});

bot.on("guildCreate", guild => {
  // Adding a new row to the collection uses `set(key, value)`
  settings.set(guild.id, defaultSettings);
  bot.channels.get('430982958820884483').send("", {
 	      embed: new Discord.RichEmbed()
 	   	  .setTitle(`J'ai rejoins un nouveau serveur ! | ${guild.name}, (id: ${guild.id}, ${guild.memberCount} membres !`)
 		    .setDescription("La configuration \"default\" a été mise en place !")
 		    .setColor("#ff0000")
        .setTimestamp()
        .setFooter(`Message automatique | Logs`)
 	     });
  bot.channels.get('430983153352572928').send(`J'ai rejoinds le serveur ${guild.name} (id: ${guild.id}). Ce serveur à ${guild.memberCount} membres !`);
});


bot.on("guildDelete", guild => {
  // Removing an element uses `delete(key)`
  settings.delete(guild.id);
  bot.channels.get('430982958820884483').send("", {
 	      embed: new Discord.RichEmbed()
 	   	  .setTitle(`J'ai quitte un serveur ! | ${guild.name}, (id: ${guild.id}, ${guild.memberCount} membres !`)
 		    .setDescription("La configuration a été retiré !")
 		    .setColor("#ff0000")
        .setTimestamp()
        .setFooter(`Message automatique | Logs`)
 	     });
  bot.channels.get('430983153352572928').send(`J'ai quitté le serveur ${guild.name} (id: ${guild.id}). Ce serveur avait ${guild.memberCount} membres !`);
});
