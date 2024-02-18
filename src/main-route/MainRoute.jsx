import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Destinations from '../components/layout/Destinations';
import Search from '../components/layout/Search';
import Selections from '../components/layout/Selections';
import Carousel from '../components/layout/Carousel';
import Footer from '../components/layout/Footer';

const MainRoute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
      <Footer />

      <Router>
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </Router>
    </>
  );
};

export default MainRoute;
