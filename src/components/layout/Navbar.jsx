import React from 'react';
import logo from '../../assets/logo.png';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { MdOutlinePhoneEnabled } from 'react-icons/md';
import { LuUserPlus } from 'react-icons/lu';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex flex-row  bg-slate-400 h-24  justify-between p-3 ">
      <div className=" flex flex-wrap justify-start items-center ml-16">
        <img
          className="cursor-pointer overflow-hidden h-16 rounded-sm w-full "
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex flex-col flex-wrap flex-grow  justify-between items-end ">
        <div className="flex flex-row  items-center">
          <div className="flex flex-row justify-between items-center list-none">
            <li className="flex items-center mr-4">
              <span className="mr-2">
                <MdOutlinePhoneEnabled className="text-red-700  text-lg" />
              </span>
              9805000098
            </li>
            <li className="flex items-center mr-4">
              <span className="mr-2">
                <CiMail className="text-red-700 text-lg" />
              </span>
              Pligrimsholidays@gmail.com
            </li>
            <li className="flex items-center mr-4">
              <span className="mr-2">
                <CiLocationOn className="text-red-700 text-lg" />
              </span>
              Jamal Kathmandu
            </li>
          </div>

          <div className="flex flex-row items-center">
            <span className="">
              <LuUserPlus className="text-red-700 text-lg" />
            </span>
          </div>
        </div>

        <div className=" flex flex-row  list-none relative gap-6  ">
          <li>Home</li>
          <button
            className="flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            About Us <BiChevronDown className="ml-1" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-sm">
              <ul>
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            </div>
          )}
          {/* <button
            className="flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
           Hoidays Packages <BiChevronDown className="ml-1" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-sm">
              <ul>
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            </div>
          )}
          <button
            className="flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Our Services <BiChevronDown className="ml-1" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-sm">
              <ul>
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            </div>
          )} */}
          <li>Blog</li>
          <li>Carees</li>
          <li>Blog</li>
          <li>Carees</li>
          <button className="bg-red-500 hover:bg-red-700 text-white   rounded-md  h-7">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
