import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile">
      <div className="info">
        <h2>Name: {user.displayName} </h2>
        <p>Email: {user.email}</p>
      </div>
      <div className="pic">
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Profile;
