exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nemaš permisiju za korištenje ove komande!");
  
  let bronze = message.guild.roles.get(client.server.bronzevip);
  let silver = message.guild.roles.get(client.server.silvervip);
  let gold = message.guild.roles.get(client.server.goldvip);
  let platinum = message.guild.roles.get(client.server.platinumvip);
  
  let user = message.mentions.members.first();
  
  if(!user) return message.channel.send("Nisi označio/la člana kojem želiš dati rank!");
  
  let userr = message.mentions.users.first();
  
  if(userr.bot) return message.channel.send("Ne možeš dati VIP rank botu!");
  
  let rank = parseInt(args[1]);
  
  if(!rank) return message.channel.send("Nisi upisao/la koji rank želiš dati tom članu (1-4)!");
  
  if(rank == 1) {
    if(user.roles.has(bronze.id)) return message.channel.send("Taj član već ima Bronze VIP!");
    if(user.roles.has(silver.id)) user.removeRole(silver);
    if(user.roles.has(gold.id)) user.removeRole(gold);
    if(user.roles.has(platinum.id)) user.removeRole(platinum);
    user.addRole(bronze).catch(err => {
      return message.channel.send(`Nisam mogao dati Bronze VIP tom članu zbog ${err}`)
    });
    message.channel.send(`Član ${user} je dobio/la Bronze VIP!`);
  }
  
  else if(rank == 2) {
    if(user.roles.has(silver.id)) return message.channel.send("Taj član već ima Silver VIP!");
    if(user.roles.has(bronze.id)) user.removeRole(bronze);
    if(user.roles.has(gold.id)) user.removeRole(gold);
    if(user.roles.has(platinum.id)) user.removeRole(platinum);
    user.addRole(silver).catch(err => {
      return message.channel.send(`Nisam mogao dati Silver VIP tom članu zbog ${err}`)
    });
    message.channel.send(`Član ${user} je dobio/la Silver VIP!`);
  }
  
  else if(rank == 3) {
    if(user.roles.has(gold.id)) return message.channel.send("Taj član već ima Gold VIP!");
    if(user.roles.has(bronze.id)) user.removeRole(bronze);
    if(user.roles.has(silver.id)) user.removeRole(silver);
    if(user.roles.has(platinum.id)) user.removeRole(platinum);
    user.addRole(gold).catch(err => {
      return message.channel.send(`Nisam mogao dati Gold VIP tom članu zbog ${err}`)
    });
    message.channel.send(`Član ${user} je dobio/la Gold VIP!`);
  }
  
  else if(rank == 4) {
    if(user.roles.has(platinum.id)) return message.channel.send("Taj član već ima Platinum VIP!");
    if(user.roles.has(bronze.id)) user.removeRole(bronze);
    if(user.roles.has(silver.id)) user.removeRole(silver);
    if(user.roles.has(gold.id)) user.removeRole(gold);
    user.addRole(platinum).catch(err => {
      return message.channel.send(`Nisam mogao dati Platinum VIP tom članu zbog ${err}`)
    });
    message.channel.send(`Član ${user} je dobio/la Platinum VIP!`);
  }
  else {
    message.channel.send("Unio/la si nepravilan broj (broj treba biti 1-4). Spisak rankova imaš na **"+client.config.prefix+"shop**.");
  }
}