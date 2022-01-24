import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { signInUsingGoogle, user } = useAuth();

  return (
    <div className="register">
      {user.email ? (
        <div>
          {" "}
          <h3>Thanks for registration. </h3>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <h2>Please Register</h2>
          <form className="registrationForm">
            <div className="name">
              <label htmlFor="name">Full Name: </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Your Password: </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
              />
            </div>
            <div className="cpassword">
              <label htmlFor="cpassword">Confirm Password: </label>
              <input
                id="cpassword"
                name="cpassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="login-feature">
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <p>
              Already have an account? <Link to="/login">Please Login</Link>
            </p>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Register;
