module.exports.config = {
  name: "help",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "DC-Nam",
  description: "",
  commandCategory: "Tiện Ích",
  usages: "",
  cooldowns: 5
};
module.exports.languages = {
  "vi": {},
  "en": {}
}
module.exports.run = async function({
  api,
  event,
  args
}) {
  const {
      threadID: tid,
      messageID: mid,
      senderID: sid
  } = event
  var type = !args[0] ? "" : args[0].toLowerCase()
  var msg = "",
      array = [],
      i = 0
  const cmds = global.client.commands
  const TIDdata = global.data.threadData.get(tid) || {}
  var prefix = TIDdata.PREFIX || global.config.PREFIX
  if (type == "all") {
      for (const cmd of cmds.values()) {
          msg += `${++i} ︱ ${cmd.config.name} ︱ ${cmd.config.description}\n`
      }
      return api.sendMessage(msg, tid, mid)
  }
 // if (type == "all") return
  if (type) {
      for (const cmd of cmds.values()) {
          array.push(cmd.config.name.toString())
      }
      if (!array.find(n => n == args[0].toLowerCase())) {
          const stringSimilarity = require('string-similarity')
          commandName = args.shift().toLowerCase() || ""
          var allCommandName = [];
          const commandValues = cmds['keys']()
          for (const cmd of commandValues) allCommandName.push(cmd)
          const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
          if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
          msg = `Không thấy lệnh '${type}' trong hệ thống\nLệnh gần giống : '${checker.bestMatch.target}'`
          api.sendMessage(msg, tid, mid)
      }
      const cmd = cmds.get(type).config
      msg = `──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n◇ ᴛᴇ̂ɴ : ${cmd.name} ( ${cmd.version} )\n◇ ǫᴜʏᴇ̂̀ɴ ʜᴀ̣ɴ : ${TextPr(cmd.hasPermssion)}\n◇ ᴛᴀ́ᴄ ɢɪᴀ̉: ${cmd.credits}\n◇ ᴍᴏ̂ ᴛᴀ̉ : ${cmd.description}\n◇ ᴛʜᴜᴏ̣̂ᴄ ɴʜᴏ́ᴍ : ${cmd.commandCategory}\n◇ ᴄᴀ́ᴄʜ sᴜ̛̉ ᴅᴜ̣ɴɢ : ${cmd.usages}\n◇ ᴛʜᴏ̛̀ɪ ɢɪᴀɴ ᴄʜᴏ̛̀ : ${cmd.cooldowns}s`
      api.sendMessage(msg, tid, mid)
  } else {
      CmdCategory()
      array.sort(S("nameModule"))
      for (const cmd of array) {
          msg += `Có [${cmd.nameModule.length}] lệnh thuộc ${cmd.cmdCategory.toUpperCase()} gồm : ${cmd.nameModule.join("  ◇  ")}\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────\n`
      }
      msg += `◇ Hiện tại có ${cmds.size} lệnh\n◇ Cách dùng : ${prefix}help [tên lệnh]\n◇ Dùng ${prefix}help all để xem tất cả các lệnh\n──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────`
      api.sendMessage(msg, tid)
  }

  function CmdCategory() {
      for (const cmd of cmds.values()) {
          const {
              commandCategory,
              hasPermssion,
              name: nameModule
          } = cmd.config
          if (!array.find(i => i.cmdCategory == commandCategory)) {
              array.push({
                  cmdCategory: commandCategory,
                  permission: hasPermssion,
                  nameModule: [nameModule]
              })
          } else {
              const find = array.find(i => i.cmdCategory == commandCategory)
              find.nameModule.push(nameModule)
          }
      }
  }
}

function S(k) {
  return function(a, b) {
      let i = 0;
      if (a[k].length > b[k].length) {
          i = 1
      } else if (a[k].length < b[k].length) {
          i = -1
      }
      return i * -1
  }
}

function TextPr(permission) {
  p = permission
  return p == 0 ? "thành viên" : p == 1 ? "admin box" : p = 2 ? "admin bot" : "toàn quyền"
            }