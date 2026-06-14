// كود طلب رمز الربط النصي عبر رقم الهاتف
if (!sock.authState.creds.registered) {
    const phoneNumber = "967783916451"; // رقمك جاهز بمفتاح الدولة
    setTimeout(async () => {
        let code = await sock.requestPairingCode(phoneNumber);
        console.log(`🔑 كود ربط الواتساب الخاص بك هو: ${code}`);
    }, 3000);
}

