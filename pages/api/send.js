import sendMessage from "@/hooks/Telegram";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, message } = JSON.parse(req.body);

        if (!(firstName && lastName && email && message)) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(
                JSON.stringify({
                    success: false,
                    message: "Missing or empty input field",
                })
            );
            return;
        }

        try {
            const sended = await sendMessage(
                `*${firstName.toUpperCase()} ${lastName.toUpperCase()}*\n _${email.toLowerCase()}_ \n\n${message}`,
                "markdown"
            );

            if (sended) {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(
                    JSON.stringify({
                        success: true,
                        message: "Message sent successfully",
                    })
                );
            } else {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(
                    JSON.stringify({
                        success: false,
                        message: "Failed to send message",
                    })
                );
            }
        } catch (error) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
                JSON.stringify({
                    success: false,
                    message: "Failed to send message",
                })
            );
        }
    } else {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(
            JSON.stringify({ success: false, message: "Method not allowed" })
        );
    }
}
