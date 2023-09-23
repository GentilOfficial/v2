const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_USER_ID;

const sendMessage = async (text, parse_mode) => {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const data = {
        chat_id: CHAT_ID,
        text,
        parse_mode,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.ok;
    } catch (error) {
        return false;
    }
};

export default sendMessage;
