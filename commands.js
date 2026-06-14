async function handleCommand(sock, msg, text) {
    const from = msg.key.remoteJid;
    const args = text.trim().split(/ +/);
    const command = args.shift().toLowerCase().replace('.', ''); 

    const botName = "𓏺اﻟﺳﻓاح اﻟﻗﻣﻳشي-𐙚𓏺";
    const devNumber = "967783916451"; // رقم المطور بدون علامة الزائد

    switch (command) {
        case 'الاوامر':
        case 'أوامر':
        case 'help':
            const menu = `*قائمة أوامر بوت ${botName}* 𐙚\n\n` +
                         `🤖 *.الاوامر* : لعرض هذه القائمة.\n` +
                         `👑 *.المطور* : لعرض معلومات المطور ورقم التواصل.\n` +
                         `📞 *.تواصل* : رابط مباشر للتواصل مع المطور.\n` +
                         `✨ *.ترحيب* : يرحب بك البوت بطريقة فخمة.\n` +
                         `⏰ *.الوقت* : لمعرفة التاريخ والوقت الحالي.\n\n` +
                         `_انتظروا إضافة المزيد من الأوامر قريباً!_`;
            await sock.sendMessage(from, { text: menu }, { quoted: msg });
            break;

        case 'المطور':
        case 'مطور':
            const devInfo = `*مطور بوت ${botName}* 👑\n\n` +
                            `• الشهرة: السفاح القميشي\n` +
                            `• المشروع: بوت واتساب متكامل بأوامر عربية متطورة.\n` +
                            `• رقم الهاتف: wa.me/${devNumber}`;
            await sock.sendMessage(from, { text: devInfo }, { quoted: msg });
            break;

        case 'تواصل':
            const contactMsg = `📞 للتواصل المباشر مع مطور البوت (السفاح القميشي) اضغط على الرابط التالي:\nhttps://wa.me/${devNumber}`;
            await sock.sendMessage(from, { text: contactMsg }, { quoted: msg });
            break;

        case 'ترحيب':
            const welcomeMsg = `مرحباً بك يا غالي! معكم بوت *${botName}* جاهز لخدمتكم. اطلب ما تشاء باستخدام الأوامر بنقطة (مثال: .الاوامر)`;
            await sock.sendMessage(from, { text: welcomeMsg }, { quoted: msg });
            break;

        case 'الوقت':
        case 'التاريخ':
            const now = new Date();
            const dateStr = now.toLocaleDateString('ar-YE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const timeStr = now.toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' });
            const timeMsg = `⏱️ *الوقت والتاريخ الحالي:*\n\n📅 اليوم: ${dateStr}\n⏰ الوقت: ${timeStr}`;
            await sock.sendMessage(from, { text: timeMsg }, { quoted: msg });
            break;

        default:
            break;
    }
}

module.exports = { handleCommand };
