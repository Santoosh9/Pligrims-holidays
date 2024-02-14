import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

const MainRoute = () => {
  return (
    < > 
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path="/" element={} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default MainRoute;
