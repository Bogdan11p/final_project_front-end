import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ currentUser, children, props }) => {
  return (
    <Route {...props}>
      {currentUser !== null ? children : <Redirect to="/" />}
    </Route>
  );
};

export default ProtectedRoute;
