import nodemailer from "nodemailer";
import { apiRateLimter } from "./components/apiratelimiter";
import { oAuth2Client } from "./gauth";

const handler = async (req, res) => {
  apiRateLimter(req, res, async () => {
    if (req.method === "POST") {
      try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
          return res.status(400).json({
            message: `Input still empty!`,
          });
        }
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken,
          },
        });

        const mailOptions = {
          from: {
            name,
            address: email,
          },
          to: process.env.TARGET_EMAIL,
          subject: "Portfolio Contact",
          text: "Portfolio",
          html: `
             <p>Sender: ${name}</p>
             <p>Email: ${email}</p>
             <h1>Message</h1>
            <p>${message}</p>`,
        };

        await new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
              return res.status(400).json({
                message: "Failed to sent mail.",
              });
            } else {
              console.log(info);
              resolve(info);
              return res.status(200).json({
                message: "Message sent successfully!",
              });
            }
          });
        });
      } catch (error) {
        return error;
      }
    }
  });
};

export default handler;
