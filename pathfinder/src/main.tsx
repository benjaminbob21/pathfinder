
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { AppWithMsalProvider } from './AppWithMsalProvider';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <AppWithMsalProvider />
    </StrictMode>
  );
}
