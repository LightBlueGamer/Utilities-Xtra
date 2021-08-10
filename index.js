const { Client } = require('discord.js');
const intents = require('./modules/intents');

const client = new Client({
    intents: intents,
    allowedMentions: {
        repliedUser: false,
    },
});

module.exports = {client};

require('./modules/commands');
require('./modules/events');
require('./modules/db');