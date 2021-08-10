const Josh = require("@joshdb/core");
const provider = require('@joshdb/sqlite');
const { client } = require('../index');
const { prefix } = require('../config/config.json');

//Initiate JOSH
client.settings = new Josh({
    name: 'settings',
    provider
});

//Ensure JOSH
async function ensureSettings(guildId) {
    await client.settings.ensure(guildId, {
        prefix: prefix
    });
};