import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beer from './pages/Beer';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/biere/:id/:name" element={<Beer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
