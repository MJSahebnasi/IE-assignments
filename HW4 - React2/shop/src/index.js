import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'

import './index.css';
import App from './App';
// import cartReducer from './reducers/modifyCart.js';

// const store = createStore(
//   cartReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
