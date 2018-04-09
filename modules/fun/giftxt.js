var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
const Discord = require('discord.js')
function giftxt(message, bot) {
  if (!message.author.bot) {
    if(message.content === "bvn") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("BIENVENUE ! ")
      .setImage("https://media.giphy.com/media/l4JyOCNEfXvVYEqB2/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
    if(message.content === "lol") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("LOL ! ")
      .setImage("https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
    if(message.content === "mdr") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("MDR ! ")
      .setImage("https://media.giphy.com/media/3ov9jLPd1fxBOWnDsQ/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }      
    if(message.content === "nul") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("NUL ! ")
      .setImage("https://media.giphy.com/media/4NcWXIu0VOgtNeynJ1/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
    if(message.content === "omg") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("OMG ! ")
      .setImage("https://media.giphy.com/media/wG9R3HQ65ofeg/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
    if(message.content === "tg") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("TG ! ")
      .setImage("https://media.giphy.com/media/ijuh8PflzJldu/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
    if(message.content === "bb") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("// ! ")
      .setImage("https://media.giphy.com/media/3oD3Yx7UkrTR9ldTYk/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    } 
    if(message.content === "cool") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("COOL ! ")
      .setImage("https://media.giphy.com/media/CvZuv5m5cKl8c/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
    if(message.content === "ah") {
      message.channel.send("", {
      embed: new Discord.RichEmbed()
      .setTitle("AH ! ")
      .setImage("https://media.giphy.com/media/3o7btW7VDxqrhJEnqE/giphy.gif")
      .setFooter(message.author.tag + " " + footer)
      .setColor("#fffff")
      });
    }
}}
module.exports = giftxt;
