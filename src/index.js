import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainComponent from './Components/useMain';
import {HashRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MainComponent>
        <App />
      </MainComponent>
    </Router>
  </React.StrictMode>
);
