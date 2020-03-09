module.exports = (client) => {
  console.log(
    `Bot je startovan, sa ${client.users.size} korisnika, u ${client.channels.size} kanal od ${client.guilds.size} servera.`
  ); // Example of changing the bot's playing game to something useful. `client.user` is what the // docs refer to as the "ClientUser".

  client.user.setActivity(
    `${client.config.ime} || ${client.config.prefix}help || ${client.guilds.size} servera`
  );
}