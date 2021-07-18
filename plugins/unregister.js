const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'ᴇᴍᴘᴛʏ sᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'sᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ ᴡʀᴏɴɢ!'
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

