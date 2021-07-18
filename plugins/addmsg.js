let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'ʀᴇᴘʟʏ ᴍᴇssᴀɢᴇ!'
    if (!text) throw `ᴜsᴇ *${usedPrefix}list${which}* ᴛᴏ sᴇᴇ ᴛʜᴇ ʟɪsᴛ`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' ʀᴇɢɪsᴛᴇʀᴇᴅ ɪɴ ᴛʜɪs ᴍᴇssᴀɢᴇ ʟɪsᴛ`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`sᴜᴄᴄᴇsғᴜʟʟʏ ᴀᴅᴅᴇᴅ ᴍᴇssᴀɢᴇ ɪɴ ᴍᴇssᴀɢᴇ ᴀs '${text}'
    
ᴀᴄᴄᴇss ᴡɪᴛʜ ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler