import axios from "axios";

const domain = "dev-qzwvwtx3l5tftscs.us.auth0.com";

async function validateToken(token) {
  try {
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default validateToken;
