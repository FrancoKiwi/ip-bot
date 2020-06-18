const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');

client.on("message", message => {
var ip = fs.readFileSync('./ip.txt', 'utf-8');
//console.log(ip);
if(message.content.startsWith('!ip') || message.content.startsWith('!IP'))
{
message.channel.send(ip)
}
});


client.login(YourTokenHere)