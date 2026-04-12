import { Kafka } from "kafkajs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const startSendMailConsumer = async () => {
    try {
        const kafka = new Kafka({
            clientId: "mail-service",
            brokers: [process.env.KAFKA_BROKER || "localhost:9092"], // ✅ fix env name
        });
        const consumer = kafka.consumer({ groupId: "mail-service-group" });
        await consumer.connect();
        const topicName = "send-mail";
        await consumer.subscribe({ topic: topicName, fromBeginning: false });
        console.log("✅ Mail service consumer started");
        // 🔥 transporter ko bahar define karo (performance better)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        await consumer.run({
            autoCommit: false, // 🔥 MOST IMPORTANT
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    const rawMessage = message.value?.toString() || "{}";
                    console.log("📩 Raw message:", rawMessage);
                    const data = JSON.parse(rawMessage);
                    const to = data.to || data.email;
                    const subject = data.subject || "No Subject";
                    const html = data.html || data.text || "<p>No Content</p>";
                    console.log("📨 Parsed mail data:", { to, subject });
                    if (!to) {
                        console.log("❌ No recipient email found");
                        return;
                    }
                    await transporter.sendMail({
                        from: `"Hireheaven" <${process.env.SMTP_USER}>`,
                        to,
                        subject,
                        html,
                    });
                    console.log(`✅ Mail sent to ${to}`);
                    // ✅ OFFSET COMMIT (THIS FIXES YOUR ISSUE)
                    await consumer.commitOffsets([
                        {
                            topic,
                            partition,
                            offset: (Number(message.offset) + 1).toString(),
                        },
                    ]);
                }
                catch (error) {
                    console.log("❌ Failed to send mail:", error);
                }
            },
        });
    }
    catch (error) {
        console.log("❌ Failed to start kafka consumer:", error);
    }
};
