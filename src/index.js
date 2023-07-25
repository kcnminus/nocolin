import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css'

/* GOING TO IMPLEMENT THIS WHEN BACKEND IS ONLINE
const express = require('express');
const exifParser = require('exif-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

//Serve static images from 'src/assets'
app.use(express.static(path.join(..dirname, '../src/assets')));
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
