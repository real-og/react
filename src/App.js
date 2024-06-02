import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestFile = 'https://raw.githubusercontent.com/real-og/traction-eye-bot/master/tonconnect-manifest.json';

export default function App() {
  return (
<TonConnectUIProvider manifestUrl={manifestFile}
          actionsConfiguration={{
            twaReturnUrl: '/'
        }}>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
}
