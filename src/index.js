import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { CartProvider } from './context/cart';
import './index.css';
import store from './store/store';
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    {/* // phần react router */}
    <BrowserRouter>
    {/* // phần usecontext */}
      <CartProvider>
        {/* // phần react redux */}
      <Provider store={store}>
        {/* // app */}
        <App />
      </Provider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
