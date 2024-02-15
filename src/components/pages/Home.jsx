import React from 'react';
import Navbar from '../layout/Navbar';

import Bgimg from '../../assets/img2.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <img src={Bgimg} alt="" />
      </div>
    </>
  );
};

export default Home;
