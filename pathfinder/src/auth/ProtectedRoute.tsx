import {useMsal } from "@azure/msal-react";
import { Outlet, useLocation } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = () => {
  const { instance, accounts } = useMsal();
  const location = useLocation();

  const isAuthenticated = accounts.length > 0;

  if (!isAuthenticated) {
    toast.error("Log In!");

    instance.loginRedirect({
      redirectUri: window.location.origin,
      state: location.pathname, // Fixed state to be a string
      scopes: ["openid", "profile", "User.Read"], // Added required scopes
    });

    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
