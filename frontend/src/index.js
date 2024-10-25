import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: redirectUri || `${window.origin}/home`
      }}  
      onRedirectCallback={(appState) => {
        window.history.replaceState({}, document.title, appState?.targetUrl || window.location.pathname);
      }}
      cacheLocation='localstorage'
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
