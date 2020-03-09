exports.run = async (client, message, args) => {
  // Most of this command is identical to kick, except that here we'll only let admins do it.

    // In the real world mods could ban too, but this is just an example, right? ;)

    if (!message.member.hasPermission("BAN_MEMBERS", false, false))
      return message.channel.send("Nema� permisiju za kori�tenje ove komande!");

    let member = message.mentions.members.first();

    if (!member)
      return message.channel.send("Ozna�i pravilnog �lana ovog servera!");

    if (!member.bannable)
      return message.channel.send(
        "Ne mogu banovati ovog �lana! Mo�da on ima ve�i role ili ja nemam permisiju za ovu funkciju!"
      );

    let reason = args.slice(1).join(" ");

    if (!reason) reason = "Nisi napisao razlog.";

    await member
      .ban(reason)

      .catch(error =>
        message.channel.send(
          `Izvinjavam se, ${message.author}. Nisam mogao banovati ovog �lana zbog: ${error}`
        )
      );

    message.channel.send(
      `${member.user.tag} je banovan od strane ${message.author.tag} zbog: ${reason}`
    );
}