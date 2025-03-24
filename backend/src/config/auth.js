import axios from "axios";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

async function validateToken(token) {
  try {
    const response = await axios.get(`https://${AUTH0_DOMAIN}/userinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default validateToken;
