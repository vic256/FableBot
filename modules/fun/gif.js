const giphy = require('giphy-api')('k0t2AnD8lWceA8SFGJ2mQIcitQ4r2vyR');
const fetchGifs = require('fetch-gifs');
const request = require('request');
const Discord = require('discord.js')
var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
function gif(message, bot, args) {
  //const Discord = require('discord.js')
  if(message.content.startsWith(prefix+'gif')) {
      
      let term = args.join(' ')
      if(!term) return message.reply(':x: FORMAT : w!gif [recherche]') 
      term = encodeURI(term)
        request('http://api.giphy.com/v1/gifs/search?q='+ term + '&rating=r&api_key=k0t2AnD8lWceA8SFGJ2mQIcitQ4r2vyR', function (error, response, body) {
              if (!error && response.statusCode == 200) {
            let content =  JSON.parse(body)
            let item = Math.floor(Math.random() * 10)
            let gif = content.data[item].images.fixed_height.url
            message.channel.send("", {
			    	embed: new Discord.RichEmbed()
				    .setTitle("Recherche de gif")
				    .setDescription("Recherche : " + term)
				    .setImage(gif)
				    .setFooter(message.author.tag + " " + footer)
				    .setColor("#fffff")
		         });
           }
         })
  }
}
module.exports = gif;