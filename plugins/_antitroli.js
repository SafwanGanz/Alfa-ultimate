let handler = m => m

handler.all = async function (m) {
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        m.reply('```ʙᴜɢ ᴅᴇᴛᴇᴄᴛᴇᴅ!!.\n\n```' + require('util').format(m.key))
        // await this.clearMessage(m.chat, m.key)
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

module.exports = handler