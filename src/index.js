import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import để sử dụng redux
import { Provider } from 'react-redux';
import store from './components/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* bọc bằng provider để sử dụng redux  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
