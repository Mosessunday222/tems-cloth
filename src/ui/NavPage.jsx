import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import Button from '../ui/Button';
import { FaBars } from 'react-icons/fa';

function NavPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-gray-50">
        <div className="flex items-center space-x-4">
          <Logo />

          {/* Hamburger menu for mobile */}
          <button 
            className="md:hidden text-black bg-gray-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>

        {/* Menu items */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:items-center md:w-auto w-full`}>

          {/* Menu on larger screens */}
          <ul className="flex flex-col md:flex-row md:space-x-6 md:ml-auto mt-4 md:mt-0">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/product'>Product</Link></li>
          </ul>

          {/* Sign in/out buttons */}
          <div className="flex md:ml-4 mt-4 md:mt-0">
            <Button type="signin">Sign In</Button>
            <Button type="signout">Sign Out</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavPage;
