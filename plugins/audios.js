//created by Safwan Ganz , ©toxic bot
const fs = require('fs')
const { exec } = require('child_process')

let buff = fs.readFileSync('./mp3/safu.mp3')
                conn.sendFile(m.chat, buff, `ham`, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
handler.help = ['safu']
handler.tags = ['songs']
handler.command = /^(safu)$/i

module.exports = handler