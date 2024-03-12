const cap = require("../../util/cap");
const exec = require("child_process").exec;

exports.run = async (client, message, args) => {
    // Checks if the user has the Bot System Administrator Role
    if (!message.member.roles.cache.find((r) => r.id === "898041743566594049")) return console.log("No bot admin role");

    exec(`git pull`, (error, stdout) => {
        let response = error || stdout;
        if (!error) {
            if (response.includes("Already up to date.")) {
                message.reply("All files are already up to date.");
            } else {
                client.channels.cache
                    .get("898041843902742548")
                    .send(`<t:${Date.now().toString().slice(0, -3)}:f> Update requested by <@${message.author.id}>, pulling files.\n\`\`\`${cap(response, 1900)}\`\`\``);

                message.reply("Pulling files from GitHub.");
                setTimeout(() => {
                    process.exit();
                }, 1000);
            }
        }
    });
};
