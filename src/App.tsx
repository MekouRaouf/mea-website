import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';
import PayAsYouGo from './pages/PayAsYouGo';
import AdminDashboard from './pages/AdminDashboard';
import AdminNewsForm from './pages/AdminNewsForm';
import AdminUserForm from './pages/AdminUserForm';
import AdminLogin from './pages/AdminLogin';

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
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/payasyougo" element={<PayAsYouGo />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/news/create" element={<AdminNewsForm />} />
            <Route path="/admin/news/edit/:id" element={<AdminNewsForm />} />
            <Route path="/admin/users/create" element={<AdminUserForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;