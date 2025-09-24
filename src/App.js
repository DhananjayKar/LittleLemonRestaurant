import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookTable from './pages/BookTable';
import Menu from './pages/Menu';
import Specials from './pages/Specials';
import Offers from './pages/Offers';
import Testimonials from './pages/Testimonials';

// Wrapper to handle Navbar prop dynamically
function AppWrapper() {
  const location = useLocation();

  // Determine which sections to hide based on the route
  const hideSections = location.pathname === '/menu' || location.pathname === '/book-table'
    ? ['Specials', 'Offers', 'Testimonials', 'Contact']
    : ['Home'];

  return (
    <>
      <Navbar hideSections={hideSections} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Specials />
              <Offers />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </Router>
  );
}

export default App;
