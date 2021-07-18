let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*ǫᴜᴇsᴛɪᴏɴ:* ${m.text}
*ᴀɴsᴡᴇʀ:* ${pickRandom(['ʏᴇs','ᴍᴀʏʙᴇ ʏᴇs','ᴍᴀʏʙᴇ','ᴍᴀʏʙᴇ ɴᴏᴘ','ɴᴏᴘ','ɴᴏᴘ ᴍᴀʏʙᴇ'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

