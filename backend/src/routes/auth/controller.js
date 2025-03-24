import sendEmail from "../../config/email.js";
import validateToken from "../../config/auth.js";
async function auth(req, res) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.json({ status: 401, message: "Token Required" });
    }
    const user = await validateToken(token);
    await sendEmail(user.email, token);

    res.json({ status: 200, message: user });
  } catch (error) {
    return res.json({ status: 401, message: error.message });
  }
}

export {auth};