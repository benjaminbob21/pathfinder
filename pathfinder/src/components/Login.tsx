import React from "react";
import { useMsal } from "@azure/msal-react";

const buttonStyle: React.CSSProperties = {
  background: "#0078d4",
  color: "white",
  border: "none",
  borderRadius: 4,
  padding: "12px 24px",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
  boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
};

const logoStyle: React.CSSProperties = {
  width: 24,
  height: 24,
};

export const Login: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup();
  };

  return (
    <button style={buttonStyle} onClick={handleLogin}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft Logo"
        style={logoStyle}
      />
      Sign in with Microsoft
    </button>
  );
};
