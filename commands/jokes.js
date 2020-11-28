const fetch = require('node-fetch');

module.exports = {
  name: 'joke',
  description: 'Returns a joke based on a category.',
  execute(message, args) {
    randomJoke(args).then((msg) => message.channel.send('```' + msg + '```'));
  },
};

// fetches a random joke
async function randomJoke(category = 'Any') {
  const baseUrl = `https://sv443.net/jokeapi/v2/joke/`;
  if (
    category[0] === 'dark' ||
    category[0] === 'any' ||
    category[0] === 'miscellaneous' ||
    category[0] === 'programming' ||
    category[0] === 'pun' ||
    category[0] === 'spooky' ||
    category[0] === 'christmas'
  ) {
    try {
      let response = await fetch(baseUrl + category);
      let json = await response.json();
      return processJoke(json);
    } catch (error) {
      return error.message;
    }
  } else {
    return `Try "!joke [category]" \nAvailable categories: any, christmas, dark, miscellaneous, programming, pun, and spooky.`;
  }
}

function processJoke(jsonObj) {
  if (jsonObj.type === 'single') {
    return `${jsonObj.joke}`;
  } else {
    return `${jsonObj.setup}...\n   ${jsonObj.delivery}`;
  }
}
