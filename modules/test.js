var footer = process.env["Footer"]
function test(message, bot, prefix) {
	if (message.content === prefix + "test") {
		message.channel.send("TEST");
	}
}
module.exports = test;
