import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

export const UserArray = createContext(null);
export const CustomerArray = createContext(null);
export const CreditcardArray = createContext(null);
export const ProductArray = createContext(null);
export const CategoryArray = createContext(null);

export const CurrentlyLoggedin = createContext(null);
export const CustomerData = createContext(null);
export const CustomerCreditcardData = createContext(null);
export const UserAuthenticator = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // The StrictMode will call Axios get twice and will give us !Aloot! of data, thats why i commented it out.
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
