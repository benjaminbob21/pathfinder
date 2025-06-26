import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import App from "./App";

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID!,
    authority: import.meta.env.VITE_AZURE_AUTHORITY!,
    redirectUri: window.location.origin,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export function AppWithMsalProvider() {
  return (
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  );
}
