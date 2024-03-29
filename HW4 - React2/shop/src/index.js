import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import './style/index.css';
import App from './App';
import cartReducer from './redux/cart.js';

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
});

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
