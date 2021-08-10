const {ensureSettings} = require('../modules/db');
module.exports = async (client, message) => {
    if (message.channel.type === 'dm' || message.author.bot) return;

    //Database
    ensureSettings(message.guild.id);
    //Database

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.guildsettings.get(message.guild.id, 'prefix');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.toLowerCase().slice(prefix.length).split(/ +/);
    const command = args.shift();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(command));

    if (!cmd) return;

    try {
        cmd.execute(message, args, client);
      } catch (error) {
        console.error(error);
      };
};