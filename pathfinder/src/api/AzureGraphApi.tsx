import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID!,
    authority: import.meta.env.VITE_AZURE_AUTHORITY!,
    redirectUri: window.location.origin,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

// Initialize MSAL instance
await msalInstance.initialize();

const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:7000/api";

export const fetchEmailMetadata = async () => {
  const activeAccount = msalInstance.getActiveAccount();
  if (!activeAccount) {
    throw new Error("No active account! Please log in.");
  }

  const accessToken = await msalInstance.acquireTokenSilent({
    scopes: ["Mail.Read"],
    account: activeAccount,
  });

  const response = await fetch(`${API_BASE_URL}/graph/email`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken.accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to read Email Data");
  }

  const data = await response.json();
  return data;
};

export const fetchCalendarData = async () => {
  const activeAccount = msalInstance.getActiveAccount();
  if (!activeAccount) {
    throw new Error("No active account! Please log in.");
  }

  const accessToken = await msalInstance.acquireTokenSilent({
    scopes: ["Calendars.Read"],
  });
  const response = await fetch(`${API_BASE_URL}/graph/calendar`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to read Calendar Data");
  }

  const data = await response.json();
  return data;
};

export const fetchResumeData = async () => {
  const activeAccount = msalInstance.getActiveAccount();
  if (!activeAccount) {
    throw new Error("No active account! Please log in.");
  }

  const accessToken = await msalInstance.acquireTokenSilent({
    scopes: ["Files.Read"],
  });
  const response = await fetch(`${API_BASE_URL}/graph/resume`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to read Resume Data");
  }

  const data = await response.json();
  return data;
};
