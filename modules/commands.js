const fs = require('fs');
const { Collection } = require('discord.js');
const { client } = require('../index');
client.commands = new Collection();

const commandFiles = fs.readdirSync('.//commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Loaded command: ${command.name}.`);
};