var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
function musique(message, bot, args) {
  if (message.content.startsWith(prefix + 'musique')) {
    let link = args[0]
      const ytdl = require('ytdl-core');
      const streamOptions = { seek: 0.1, volume: 1 };
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
          const stream = ytdl(link, { filter : 'audioonly' });
          const dispatcher = connection.playStream(stream, streamOptions);
        message.reply('Je suis connecté!\n ✖ =>arrete le son\n ▶ => met en pause\n 🔃 => reprend le son si il est en pause').then(messagex => {
              const collecteur = messagex.createReactionCollector((reaction, user) => user.id === message.author.id);
              messagex.react('✖')
              collecteur.on('collect', async(reaction) => {
               if (reaction.emoji.name === "✖") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
                 message.member.voiceChannel.leave();
               }
              await reaction.remove(message.author.id); 
              })
              messagex.react('▶')
              collecteur.on('collect', async(reaction) => {
               if (reaction.emoji.name === "▶") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
                 dispatcher.pause();
               }
              await reaction.remove(message.author.id); 
              })
                messagex.react('🔃')
              collecteur.on('collect', async(reaction) => {
               if (reaction.emoji.name === "🔃") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
  
                 dispatcher.resume();
               }
              await reaction.remove(message.author.id); 
              })
              })
          
            })
          .catch(console.log);
            } else {
        message.reply("Tu as besoin d'être connecté à un salon vocal! ");
      }
    }
}
module.exports = musique;