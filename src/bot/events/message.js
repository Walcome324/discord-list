client.on("message", message=>{
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	let args = message.content.slice(prefix.length).trim().split(/ +/);
	let command = args.shift().toLowerCase();
	let cmd = searchCommand(command);
	try{
	if(!cmd) return message.reply("That command Doesn't exist!");
	else eval(cmd.code);
	} catch(e){
	  message.reply(`An Error Occured!\n\`\`\`\n${e}\n\`\`\``)
	}
});