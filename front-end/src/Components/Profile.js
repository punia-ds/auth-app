import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [responsemsg, setReponseMsg] = useState(null);
  const [email,setEmail] = useState(null);
  const { logout, user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
// api call for authentication and sending mail
  const sendTokenToBackend = async () => {
    try {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        let reponse = await axios.post("http://localhost:8080/auth/callback", {
          token,
        });
        setReponseMsg(reponse?.data?.message);
        setEmail(reponse?.data?.email);
      }
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };
  useEffect(() => {
    sendTokenToBackend();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {isAuthenticated && (
        <div
          className="card  text-center  flex-column justify-content-between"
          style={{ width: "22rem", height: "18rem" }}
        >
          <div>
            {/* <img src={user.picture}/> */}
            <h2 className="text-primary">Hello!</h2>
            <h2 className="text-primary">{user.nickname}</h2>
            <p className="text-muted">{user.email}</p>
          </div>
          {responsemsg && (
            <div className="alert alert-success" role="alert">
              {responsemsg}  {email&&(<div className="alert">to {email}</div>)}
            </div>
          )}
          <button className="btn btn-danger" onClick={() => logout()}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
