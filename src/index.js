import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Routes path="/" element={<Layout />} >
    <route index element={<Contenu />} />
    <route path='contenu' element={<Contact />} />
    <route path='produit' element={<Produit />} />
    </Route>
    </Routes> 
    </BrowserRouter>

  {/* const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App /> */}
  </React.StrictMode>
);


