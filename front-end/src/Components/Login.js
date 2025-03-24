import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Login(params) {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return null;
}
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg text-center"
          style={{ width: "22rem" }}
        >
          <h4 className="text-danger"> Please log in for authorization</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
