import React from "react";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      {user.email ? (
        <div>
          <h1>Welcome to Home Page</h1>
          <h1>Name: {user.displayName}</h1>
          <h5>Email: {user.email}</h5>
          <img src={user.photoURL} alt="Abdul Owhab" />
        </div>
      ) : (
        <h1> Please Login or Sign Up. </h1>
      )}
    </div>
  );
};

export default Home;
