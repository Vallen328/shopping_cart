import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider 
      domain="dev-b486jeq6s6wjswrd.us.auth0.com"
      clientId="LanXQYynj62VH8yJRaigccTl1dZsvz6u"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}> */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);