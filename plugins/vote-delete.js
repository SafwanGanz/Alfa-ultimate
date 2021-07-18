let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*ɴᴏ ᴠᴏᴛɪɴɢ ɪɴ ᴛʜɪs grouʏp!*_\n\n*${usedPrefix}sᴛᴀʀᴛɪᴠᴏᴛᴇ* - ᴛᴏ sᴛᴀʀᴛ ᴠᴏᴛɪɴɢ`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler