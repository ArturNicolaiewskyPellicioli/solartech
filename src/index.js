import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import App from './App';
import DataProvider from './context/DataProvider';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Header />
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);