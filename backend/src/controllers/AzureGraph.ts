import { Client } from '@microsoft/microsoft-graph-client';

// Initialize Microsoft Graph Client
const getGraphClient = (accessToken: string) => {
  return Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    },
  });
};

// Function to fetch calendar data
export const fetchCalendarData = async (accessToken: string) => {
  const client = getGraphClient(accessToken);
  try {
    const events = await client.api('/me/events').get();
    return events;
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    throw error;
  }
};

// Function to fetch email metadata
export const fetchEmailMetadata = async (accessToken: string) => {
  const client = getGraphClient(accessToken);
  try {
    const messages = await client.api('/me/messages').get();
    return messages;
  } catch (error) {
    console.error('Error fetching email metadata:', error);
    throw error;
  }
};

// Function to fetch OneDrive résumé data
export const fetchResumeData = async (accessToken: string) => {
  const client = getGraphClient(accessToken);
  try {
    const files = await client.api('/me/drive/root/search(q=\"resume\")').get();
    return files;
  } catch (error) {
    console.error('Error fetching résumé data:', error);
    throw error;
  }
};