import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';
import LoginRegister from './pages/LoginRegister';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Home />} /> {/* Redirecting About to Home for simplicity */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
