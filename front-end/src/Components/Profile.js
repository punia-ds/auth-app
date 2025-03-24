import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
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
          <button className="btn btn-danger" onClick={() => logout()}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
