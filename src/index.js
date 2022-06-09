import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

import {browserrouter, routes, route} from 'react-router-dom';
const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Routes path="/" element={<Header />} />
    <Route index element={<contenu />} />
    <Route path='contenu' element={<contenu />} />
    <Route path='message' element={<message />} />
    <Route path='produit' element={<produit />} />
    </Route>
    </Routes> 
    </BrowserRouter>

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


