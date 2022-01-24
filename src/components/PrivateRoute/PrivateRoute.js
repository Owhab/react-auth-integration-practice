import React from "react";
import { Navigate, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  // const {children, ...rest} = props;
  const { user } = useAuth();

  return (
    <div {...rest}>{user.email ? children : <Navigate to="/login" />}</div>
  );
};

export default PrivateRoute;
