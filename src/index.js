import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TonConnectUIProvider ,THEME} from '@tonconnect/ui-react';
import { SDKProvider } from '@tma.js/sdk-react';
import Edit from './EditAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <TonConnectUIProvider uiPreferences={{theme:THEME.DARK}} manifestUrl="https://sxzmgx5q-3000.euw.devtunnels.ms/tonconnect-manifest.json">
    <SDKProvider acceptCustomStyles={true} debug={true}>
      <App/>
    </SDKProvider>
  </TonConnectUIProvider>

);

