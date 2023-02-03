import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import microApp from '@micro-zoe/micro-app';

microApp.start({
  // lifeCycles: {
  //   created(e) {
  //     console.log('created');
  //   },
  //   beforemount(e) {
  //     console.log('beforemount');
  //   },
  //   mounted(e) {
  //     console.log('mounted');
  //   },
  //   unmount(e) {
  //     console.log('unmount');
  //   },
  //   error(e) {
  //     console.log('error');
  //   },
  // },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
