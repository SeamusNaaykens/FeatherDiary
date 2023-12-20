import './App.css';
import React from 'react';
import { Header } from './frontend/components/Header';
import { Home } from './frontend/pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './frontend/pages/Login';

function App() {
  return (
    <main>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
