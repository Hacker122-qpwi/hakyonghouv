import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res
      .status(400)
      .json({ success: false, message: "Message is required" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yonghouvh@gmail.com", // Gmail account
        pass: "unrdogdlhzcdyvkc", // Gmail App Password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: '"Plp project" <yonghouvh@gmail.com>',
      to: "yonghouvh@gmail.com",
      subject: "New Message from Website Primary learning program",
      text: message,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
