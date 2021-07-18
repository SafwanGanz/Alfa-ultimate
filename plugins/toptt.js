const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴠᴏɪᴄᴇ ɴᴏᴛᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m,
    ptt: true
  })
}
handler.help = ['tovn']
handler.tags = ['audio']

handler.command = /^to(vn|(ptt)?)$/i

module.exports = handler
