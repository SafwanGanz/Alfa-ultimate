let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/GUESS THE SONG TITLE/i.test(m.quoted.text)) return !0
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    if (!(id in conn.tebaklagu)) return m.reply('ᴛʜᴇ ᴍᴀᴛᴛᴇʀ ʜᴀs ᴇɴᴅᴇᴅ')
    if (m.quoted.id == conn.tebaklagu[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.judul.toLowerCase()) {
            global.DATABASE._data.users[m.sender].exp += conn.tebaklagu[id][2]
            m.reply(`*ʀɪɢʜᴛ!*\n+${conn.tebaklagu[id][2]} XP`)
            clearTimeout(conn.tebaklagu[id][3])
            delete conn.tebaklagu[id]
        } else if (m.text.toLowerCase().endsWith(json.judul.split` `[1])) m.reply(`*ᴀ ʟɪᴛᴛɪʟᴇ ᴍᴏʀᴇ!*`)
        else m.reply(`*ᴡʀᴏɴɢ!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler