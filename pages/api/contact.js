import apiRateLimiter from "./component/apiRateLimiter";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  apiRateLimiter(req, res, async () => {
    if (req.method === "POST") {
      const data = req.body;
      if (!data.name || !data.email || !data.message) {
        return res.status(400).json({
          message: `Input still empty!`,
        });
      }
      const email = process.env.EMAIL;
      const pass = process.env.EMAIL_PASS;

      const transporter = nodemailer.createTransport({
        port: 465,
        service: "gmail",
        auth: {
          user: email,
          pass,
        },
        host: "smtp.gmail.com",
        secure: true,
      });

      await new Promise((res, rej) => {
        transporter.verify((err, success) => {
          if (err) {
            console.error(err);
            rej(err);
            res.status(400).json({
              message: 'Transporter is error.'
            })
          } else {
            console.log(success);
            res(success);
          }
        });
      });

      const mailData = {
        from: {
          name: data.name,
          address: data.email,
        },
        to: "zarchxxx@gmail.com",
        subject: "Portfolio Contact",
        text: "Portfolio",
        html: `
        <p>Sender: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <h1>Message</h1>
        <p>${data.message}</p>`,
      };

      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
            res.status(400).json({
              message: 'Message failed to send! Try Again'
            })
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });
    }
    res.status(200).json({ message: "Message sent!" });
  });
};

export default handler;
