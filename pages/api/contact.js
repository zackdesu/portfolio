import { transporter, mailOptions } from "./component/nodemailer";
import apiRateLimiter from "./component/apiRateLimiter";

const handler = async (req, res) => {
  apiRateLimiter(req, res, async () => {
    if (req.method === "POST") {
      const data = req.body;
      if (!data.name || !data.email || !data.message) {
        return res.status(400).json({
          message: `Input still empty!`,
        });
      }

      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: "Portfolio Contact",
          text: "Portfolio",
          html: `
        <p>Sender: ${data.name}</p>
<p>Email: ${data.email}</p>
<h1>Message</h1>
<p>${data.message}</p>
            `,
        });
        return res.status(200).json({ message: "Message Sent!" });
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
      }
    }
    return res.status(400).json({ message: "Bad Request" });
  });
};

export default handler;
