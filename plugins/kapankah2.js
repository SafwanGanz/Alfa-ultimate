let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Question:* ${m.text}
*Answer:* ${Math.floor(Math.random() * 10)} ${pickRandom(['second', 'minute', 'Hour', 'day', 'sunday', 'month', 'year', 'decade', 'century'])} lagi ...
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'kah'].map(v => 'when' + v + ' <question>')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i
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

