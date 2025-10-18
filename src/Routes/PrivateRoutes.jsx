import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
      <span className="loading loading-spinner text-blue-600 size-20"></span>
    </div>
    )
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
