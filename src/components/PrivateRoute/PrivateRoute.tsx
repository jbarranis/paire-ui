import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

export const PrivateRoute = ({ children }: any) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user?.id) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
      />
    );
  }
  return children;
};
