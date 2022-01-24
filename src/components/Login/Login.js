import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();

  return (
    <div className="login">
      {user.email ? (
        <div>
          {" "}
          <h3>
            Thanks for Login.. Go to your <Link to="/profile">Profile</Link>{" "}
          </h3>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <h2>Please Login</h2>
          <form className="loginForm">
            <div className="email">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
              />
            </div>
            <button>Login</button>
          </form>
          <button onClick={signInUsingGoogle}>Google Sign In</button>
          <br />
          <p>
            Don't have an account? <Link to="/register">Please Register</Link>
          </p>{" "}
        </div>
      )}
    </div>
  );
};

export default Login;
