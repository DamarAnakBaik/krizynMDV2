let handler = async(m, { conn }) => {
conn.sendContact(m.chat, 6285896677508, DAMAR BOTZ, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
