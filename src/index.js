import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './components/pages/headerbar';
import FooterComponent from './components/pages/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeaderComponent />
    <FooterComponent />
  </>
);

reportWebVitals();
