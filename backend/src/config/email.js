import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dsmail.balram@gmail.com",
    pass: "bcmooswxhgncvewe",
  },
});

async function sendEmail(to, token) {
  try {
    const mailOptions = {
      from: "dsmail.balram@gmail.com",
      to: to,
      subject: "Your Authentication Token",
      text: `Here is your authentication token: ${token}`,
    };
    let respone = await transporter.sendMail(mailOptions);
    return respone;
  } catch (error) {
    console.log(error.message);
  }
}

export default sendEmail;
