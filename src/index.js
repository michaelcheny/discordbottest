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

  const [command, ...args] = msg.content.trim().substring(PREFIX.length).split(/\s+/);

  // console.log(command);
  // console.log(args);

  if (command === 'kick') {
    if (!msg.member.hasPermission('KICK_MEMBERS'))
      return message.reply('You do not have permissions to use that command.');
    if (args.length === 0) return msg.reply('Please provide ID');
    const member = msg.guild.members.cache.get(args[0]);
    console.log(msg.guild.members.cache.get(args[0]));

    if (member) {
      member
        .kick()
        .then((member) => msg.channel.send(`Bye ${member}.`))
        .catch((err) => message.channel.send('This member is an admin. No can do.'));
    } else if (command === 'ban') {
      msg.channel.send('banned');
      // implement ban from server
    } else {
      // fall back for no command found
    }
  }

  // console.log(`[${msg.author.tag}]: ${msg.content}`);
});
