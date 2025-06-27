import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes';
import { Toaster } from "sonner";
import {AppWithMsalProvider} from "./auth/AppWithMsalProvider";

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <Router>
        <AppWithMsalProvider>
          <AppRoutes />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </AppWithMsalProvider>
      </Router>
    </StrictMode>
  );
}
