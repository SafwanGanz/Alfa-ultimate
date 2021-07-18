let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('```ᴏᴏᴘs!!, ɴᴏᴛ ᴀʟʟᴏᴡᴅ ʟɪɴᴋ ɢʀᴏᴜᴘ```')
    if (global.opts['remove']) {
      if (isAdmin || !isBotAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
