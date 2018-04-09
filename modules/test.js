var footer = process.env["Footer"]
var prefix = process.env["Prefix"]
function test(message, bot) {
	if (message.content === prefix + "test") {
		message.channel.send("TEST");
	}
}
module.exports = test;