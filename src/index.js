require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

const PREFIX = '!';

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log(`Bot: ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.author.bot || !msg.content.startsWith(PREFIX)) return;

  const [commandName, ...args] = msg.content.trim().substring(PREFIX.length).split(/\s+/);

  // console.log(commandName);
  // console.log(args);

  if (commandName === 'kick') {
    if (args.length === 0) return msg.reply('Please provide ID');
    const member = msg.guild.members.cache.get(args[0]);
    console.log(msg.guild.members.cache);

    if (member) member.kick();
    msg.channel.send('Bye felicia');
    // implement kick from server
  } else if (commandName === 'ban') {
    msg.channel.send('banned');
    // implement ban from server
  } else {
    // fall back for no command found
  }

  // console.log(`[${msg.author.tag}]: ${msg.content}`);
});
