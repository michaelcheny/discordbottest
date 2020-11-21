require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = '!';

client.login(process.env.BOT_TOKEN);

// console.log("hehslkdfksd");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(PREFIX)) return;

  const [commandName, ...args] = msg.content.trim().substring(PREFIX.length).split(/\s+/);

  console.log(commandName);
  console.log(args);

  if (commandName === 'kick') {
    if (args.length === 0) return msg.reply('Please provide ID');
    const member = msg.guild.members.cache.get(args[0]);
    console.log(msg.guild.members.cache);

    if (member) member.kick();
    msg.channel.send('Bye felicia');
  } else if (commandName === 'ban') {
    msg.channel.send('banned');
  }

  // console.log(`[${msg.author.tag}]: ${msg.content}`);
});
