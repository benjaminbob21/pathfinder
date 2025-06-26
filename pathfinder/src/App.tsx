
import { Login } from './components/Login';
import React from 'react';
import { useMsal } from '@azure/msal-react';


function App() {
  const { instance, accounts } = useMsal();
  const account = accounts[0];
  const [showSignOut, setShowSignOut] = React.useState(false);

  const isLoggedIn = !!account;
  const userName = account?.name || '';
  const userEmail = account?.username || '';
  const userAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName || 'User')}&background=0078d4&color=fff&size=128`;

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fafd 100%)' }}>
      {!isLoggedIn ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 8px 32px rgba(0,120,212,0.10)',
            padding: '64px 40px',
            minWidth: 400,
            maxWidth: 480,
            textAlign: 'center',
            border: '1.5px solid #e0e7ef',
          }}>
            <h1 style={{ fontFamily: 'Segoe UI', color: '#0078d4', fontWeight: 800, fontSize: 36, marginBottom: 10, letterSpacing: '-1px' }}>Welcome to Pathfinder</h1>
            <p style={{ color: '#2b2b2b', fontSize: 20, marginBottom: 36, fontWeight: 500, opacity: 0.85 }}>
              Empowering your journey: actionable career insights for every path.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Login />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {/* Top Bar */}
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px 48px 24px 48px',
            boxSizing: 'border-box',
            background: 'transparent',
          }}>
            <h2 style={{ fontFamily: 'Segoe UI', color: '#0078d4', fontWeight: 700, fontSize: 28, margin: 0 }}>
              Welcome {userName} to Pathfinder
            </h2>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16 }}>
              <img
                src={userAvatar}
                alt="avatar"
                style={{ borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px #0078d420', cursor: 'pointer' }}
                onClick={() => setShowSignOut((v) => !v)}
                title="Profile"
              />
              {showSignOut && (
                <div
                  style={{
                    position: 'absolute',
                    top: 56,
                    right: 0,
                    background: 'white',
                    border: '1px solid #e0e7ef',
                    borderRadius: 8,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                    padding: '8px 0',
                    minWidth: 120,
                    zIndex: 10,
                  }}
                >
                  <button
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      color: '#0078d4',
                      fontWeight: 600,
                      fontSize: 16,
                      padding: '10px 0',
                      cursor: 'pointer',
                    }}
                    onClick={async () => {
                      setShowSignOut(false);
                      await instance.logoutPopup();
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Main Content Split in Two */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            width: '100%',
            height: 'calc(100vh - 110px)',
            boxSizing: 'border-box',
            padding: '0 48px 48px 48px',
          }}>
            {/* Top Row: Two Cards Side by Side */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: 32, height: '50%' }}>
              {/* Insights Section */}
              <div style={{
                flex: 1,
                background: '#f3f6fc',
                borderRadius: 16,
                boxShadow: '0 1px 4px #0078d410',
                padding: 32,
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <h3 style={{ color: '#2b2b2b', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Your Insights</h3>
                <p style={{ color: '#444', fontSize: 16, margin: 0 }}>
                  <em>Personalized career insights will appear here based on your Microsoft 365 activity.</em>
                </p>
              </div>
              {/* Growth Plan Section */}
              <div style={{
                flex: 1,
                background: '#e3f0ff',
                borderRadius: 16,
                boxShadow: '0 1px 4px #0078d410',
                padding: 32,
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <h3 style={{ color: '#0078d4', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Growth Plan</h3>
                <p style={{ color: '#2b2b2b', fontSize: 16, margin: 0 }}>
                  <em>Upskilling suggestions and LinkedIn Learning courses will be shown here.</em>
                </p>
              </div>
            </div>
            {/* Bottom Row: Full Width Card for Growth Path Graph */}
            <div style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 1px 4px #0078d410',
              padding: 32,
              minWidth: 0,
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <h3 style={{ color: '#0078d4', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Growth Path</h3>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Placeholder for graph */}
                <div style={{ width: '80%', height: 180, background: 'linear-gradient(90deg, #e3f0ff 0%, #0078d4 100%)', borderRadius: 12, opacity: 0.2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0078d4', fontWeight: 700, fontSize: 24 }}>
                  [Growth Graph Placeholder]
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
