let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : DAMAR BOTZ
║│➸ ```UMUR``` : 14 TAHUN
║│➸ ```ASAL``` : LAMPUNG TIMUR
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/F6CAAOhrORm1sPdq6cRKAS
║│➸ ```ISTAGRAM``` : http://instagram.com/sahrulwara_____
║│➸ ```WHATSAPP``` : http://wa.me/6285822347348
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
