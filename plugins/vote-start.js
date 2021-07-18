let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_ᴛʜᴇʀᴇ ᴀʀᴇ sᴛɪʟʟ ᴠᴏᴛᴇs ɪɴ ᴛʜɪs ᴄʜᴀᴛ!_\n\n*${usedPrefix}ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇs* - ᴛᴏ ᴅᴇʟᴇᴛᴇ ᴠᴏᴛᴇs`
    }
    m.reply(`ᴠᴏᴛᴇ sᴛᴀʀᴛs!\n\n*${usedPrefix}ᴜᴘᴠᴏᴛᴇ* - ғᴏʀ ʏᴇs\n*${usedPrefix}ᴅᴇᴠᴏᴛᴇ* - ғᴏʀ ɴᴏ\n*${usedPrefix}ᴄʜᴇᴄᴋᴠᴏᴛᴇ* - ᴛᴏ ᴄʜᴇᴄᴋ ᴠᴏᴛᴇ\n*${usedPrefix}ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇ * - ᴛᴏ ᴅᴇʟᴇᴛᴇ ᴠᴏᴛᴇs`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler