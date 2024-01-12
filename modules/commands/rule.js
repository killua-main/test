module.exports.config = {
  name: "rule",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "CatalizCS",
  description: "ᴛᴜ̀ʏ ʙɪᴇ̂́ɴ ʟᴜᴀ̣̂ᴛ ᴄʜᴏ ᴛᴜ̛̀ɴɢ ʙᴏx",
  commandCategory: "Tiện Ích",
  usages: "◉ !ʀᴜʟᴇ ᴀᴅᴅ : ᴛʜᴇ̂ᴍ ʟᴜ̣ᴀ̂ᴛ\n◉ !ʀᴜʟᴇ ʟɪsᴛ : xᴇᴍ ᴅᴀɴʜ sᴀ́ᴄʜ ʟᴜ̣ᴀ̂ᴛ\n◉ !ʀᴜʟᴇ ʀᴇᴍᴏᴠᴇ : xᴏᴀ́ ʟᴜᴀ̣̂ᴛ ʜɪᴇ̣̂ɴ ᴄᴏ́ ",
  cooldowns: 5,
  dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "rules.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = ({ event, api, args, permssion }) => {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "rules.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "add": {
            if (permssion == 0) return api.sendMessage("◉ ᴍᴀ̀ʏ ᴄᴏ́ ǫᴜʏᴇ̂̀ɴ ᴀ̀", threadID, messageID);
            if (content.length == 0) return api.sendMessage("◉ ɢʜɪ ʟᴜᴀ̣̂ᴛ ᴠᴀ̀ᴏ ʙᴀ̣ɴ ᴏ̛ɪ", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage('◉ ᴛʜᴇ̂ᴍ ʟᴜᴀ̣̂ᴛ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ', threadID, messageID);
            break;
        }
        case "list":
        case"all": {
            var msg = "", index = 0;
            for (const item of thisThread.listRule) msg += `${index+=1}︱ ${item}\n`;
            if (msg.length == 0) return api.sendMessage("◉ ɴʜᴏ́ᴍ ᴄᴜ̉ᴀ ʙᴀ̣ɴ ʜɪᴇ̣̂ɴ ᴛᴀ̣ɪ ᴄʜᴜ̛ᴀ ᴄᴏ́ ᴅᴀɴʜ sᴀ́ᴄʜ ʟᴜᴀ̣̂ᴛ !", threadID, messageID);
            api.sendMessage(`「 ʀᴜʟᴇ 」\n----------\n${msg}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("◉ ᴍᴀ̀ʏ ᴄᴏ́ ǫᴜʏᴇ̂̀ɴ ᴀ̀", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("◉ ᴄᴏ́ ʟᴜᴀ̣̂ᴛ ᴀ̀ ᴍᴀ̀ xᴏᴀ́", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage(`◉ xᴏᴀ́ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ ʟᴜᴀ̣̂ᴛ ᴛʜᴜ̛́ ${content}`, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("◉ ᴍᴀ̀ʏ ᴄᴏ́ ǫᴜʏᴇ̂̀ɴ ᴀ̀", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("◉ ᴄᴏ́ ʟᴜᴀ̣̂ᴛ ᴀ̀ ᴍᴀ̀ xᴏᴀ́", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage(`◉ xᴏ́ᴀ ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ ᴛᴏᴀ̀ɴ ʙᴏ̣̂ ʟᴜᴀ̣̂ᴛ ᴄᴜ̉ᴀ ɴʜᴏ́ᴍ!`, threadID, messageID);
                break;
            }
        }
        default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
                return api.sendMessage(`「 ʀᴜʟᴇ ʙᴏx 」\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ${msg} \n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n ◉ ᴠɪᴇ̣̂ᴄ ᴛᴜᴀ̂ɴ ᴛʜᴜ̉ ʟᴜᴀ̣̂ᴛ ɢᴏ́ᴘ ɪ́ᴄʜ ʀᴀ̂́ᴛ ʟᴏ̛́ɴ ᴛʀᴏɴɢ ᴠɪᴇ̣̂ᴄ ᴘʜᴀ́ᴛ ᴛʀɪᴇ̂̉ɴ ʙᴏx`, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }

    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}