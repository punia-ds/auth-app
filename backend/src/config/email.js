import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, token) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: "Your Authentication Token",
            text: `Here is your authentication token: ${token}`,
          };
          await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error.message);
    }
}


export default sendEmail;