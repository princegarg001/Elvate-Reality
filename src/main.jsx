import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

AOS.init({ once: true });
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
