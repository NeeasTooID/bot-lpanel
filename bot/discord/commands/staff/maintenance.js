exports.run = async (client, message, args) => {
    //Checks if the user has the Bot System Administrator Role.
    if (!message.member.roles.cache.find((r) => r.id === "898041743566594049")) return;

    //
    if (!args[1]) {
        return message.reply("Please provide a Node to put into maintenance!");
    } else {
        const Data = nodeStatus.get(args[1].toLowerCase());

        if (Data == null) {
            return message.reply("Invalid Node provided. Please provide a valid Node DB name.");
        } else {
            if (Data.maintenance) {
                const Result = await nodeStatus.set(`${args[1]}.maintenance`, false);

                if (!Result) return message.reply(`Unable to put ${args[1]} out of maintainance mode.`);

                message.reply(`Successfully put ${args[1]} out of maintainance mode.`);
            } else if (Data.maintenance == false) {
                const Result = await nodeStatus.set(`${args[1]}.maintenance`, true);

                if (!Result) return message.reply(`Unable to put ${args[1]} into maintainance mode.`);

                message.reply(`Successfully put ${args[1]} into maintainance mode.`);
            }
        }
    }
};
