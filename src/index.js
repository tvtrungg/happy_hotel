import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
