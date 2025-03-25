import sendEmail from "../../config/email.js";
import validateToken from "../../config/auth.js";
async function auth(req, res) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.json({ status: 401, message: "Token Required" });
    }
    // validate the token
    const user = await validateToken(token);
    if (user?.status === 200) {
      // send email
      let response = await sendEmail(user?.data?.email, token);
      if (response?.accepted?.length > 0) {
        return res.json({
          status: 200,
          message: "Email sent successfully",
          email: response?.envelope?.to[0],
        });
      } else {
        return res.json({ status: 500, message: "Failed to send email" });
      }
    } else {
      return res.json({ status: 401, message: "Token is invalid or expired" });
    }
  } catch (error) {
    return res.json({ status: 401, message: error.message });
  }
}

export { auth };
