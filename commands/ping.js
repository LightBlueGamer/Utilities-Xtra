const {MessageEmbed} = require('discord.js');
const colors = require('../config/colors.json');
const ms = require('pretty-ms');
module.exports = {
    name: 'ping',
    alias: [],
	description: 'Shows bot and API latency',
    category: 'misc',
    userPermissions: [],
    botPermissions: [],
	execute: async(message, args, client) => {
        const msg = await message.channel.send(`Pinging...`);
        const botLatency = ms(Date.now() - msg.createdAt)
        const apiLatency = ms(client.ws.ping);

        const embed = new MessageEmbed()
        .setTitle(`🤖 ${botLatency}ms\n🌎 ${apiLatency}ms`)
        .setColor(colors.royalBlue)
        .setFooter(`Requested by ${message.author.tag}`)
        message.reply(embed);
    },
};