import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AUTH_DOMAIN = `${process.env.REACT_APP_AUTH_DOMAIN}`;
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;

root.render(
  <Auth0Provider
    domain="dev-l80cz5xxicxhl7eq.us.auth0.com"
    clientId="Axe3q4QUoZdNp36AWGui6pjtP0ZvyWO0"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
