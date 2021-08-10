const fs = require('fs');
const { Collection } = require('discord.js');
const { client } = require('../index');
client.commands = new Collection();

fs.readdir(".//events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`../events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        client.events.set(eventName);
        console.log(`Loaded event: ${eventName}).`);
    });
});