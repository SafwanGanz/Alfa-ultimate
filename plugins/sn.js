const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
let user = global.DATABASE._data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
    m.reply(`
  ʏᴏᴜʀ sᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ :\n
  sɴ : ${sn}
  `.trim())
}
handler.help = ['serial']
handler.tags = ['exp']
handler.register = true

handler.command = /^serial$/i

module.exports = handler