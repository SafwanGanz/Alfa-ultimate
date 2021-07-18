let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*ɴᴏ ᴠᴏᴛɪɴɢ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ!*_\n\n*${usedPrefix}sᴛᴀʀᴛɪᴠᴏᴛᴇ* - ᴛᴏ sᴛᴀʀᴛ ᴠᴏᴛɪɴɢ`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'ʏᴏᴜ ʜᴀᴠᴇ ᴠᴏᴛᴇᴅ!!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`ᴅᴏɴᴇ\n\n*${usedPrefix}cekvote* - ᴛᴏ ᴄʜᴇᴄᴋ ᴛʜᴇ ᴠᴏᴛᴇ`)

}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(up|de)?vote$/i
handler.group = true
module.exports = handler