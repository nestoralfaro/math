import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Math from './Math';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Math decimal={3}/> */}
    <Math/>
  </React.StrictMode>
);