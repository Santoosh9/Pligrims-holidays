import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="flex flex-row bg-#FFFFFF h-8 w-full">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className=" flex flex-row">
        <div className=" flex flex-row">
          <div className="  flex flex-row">
            <h1>1</h1>
            <h2>2</h2>
            <h3>3</h3>
          </div>
          <div className=" flex-row-reverse">login</div>
        </div>
        <div className=" flex flex-row  ">
          <h1>hii</h1>
          <h2>hii</h2>
          <h3>hii</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
