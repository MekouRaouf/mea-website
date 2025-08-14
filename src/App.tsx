import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Products from './pages/Products';
import PayAsYouGo from './pages/PayAsYouGo';

function App() {
  return (
    <Router  basename="/mea-website">
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/payasyougo" element={<PayAsYouGo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;