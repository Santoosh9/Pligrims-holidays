import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';

const MainRoute = () => {
  return (
    <>
      <Home />
      <Router>
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </Router>
    </>
  );
};

export default MainRoute;
