import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {motion} from "framer-motion"
import PropTypes from 'prop-types';


const Navbar = ({ onBlogClick, onHeroClick, onServiceClick, onAboutUsClick, onContactClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseClick = () => {
    setIsSidebarOpen(false);
  };
  const handleSidebarClick = () => {
    setIsSidebarOpen(false);  // Close the sidebar when clicked anywhere inside
  };
  
  return (
    <nav className='relative z-20'>
    <motion.div 
    initial={{ opacity: 0, y: -50}}
    animate={{ opacity:1, y:0}}
    className='container py-5 flex justify-between items-center'>
    {/*Logo section*/}
    <div>
        <h1 className='font-bold text-2xl'>NexaDesigns</h1>
    </div>
    {/* Mobile menu */}
    <div className="lg:hidden">
    
          {isSidebarOpen ? (
            <IoMdMenu className="text-4xl cursor-pointer" onClick={handleCloseClick} />
          ) : (
            <IoMdMenu className="text-4xl cursor-pointer" onClick={handleMenuClick} />
          )}
    </div>    
    {/*Menu section*/}
    <div className='hidden lg:block'>
          <ul className='flex items-center gap-3'>
            <li>
              <button
                onClick={onHeroClick}
                className='inline-block py-2 px-3 hover:text-secondary'
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={onServiceClick}
                className='inline-block py-2 px-3 hover:text-secondary'
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={onBlogClick}
                className='inline-block py-2 px-3 hover:text-secondary'
              >
             Blog
              </button>
            </li>
            <li>
              <button
                onClick={onAboutUsClick}
                className='inline-block py-2 px-3 hover:text-secondary'
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={onContactClick}
                className='inline-block py-2 px-3 hover:text-secondary'
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

    </motion.div>
    {/* Sidebar menu (mobile only) */}
    {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-80 w-60 bg-gray-900 opacity-100 z-100 transition-all duration-300 ease-in-out" onClick={handleSidebarClick}>
          <div className="absolute top-0 right-0 p-4">
            <IoMdClose className="text-4xl text-white cursor-pointer" onClick={handleCloseClick} />
          </div>
          <ul className="mt-16 px-6 list-none">
            <li className="mb-4">
              <button onClick={onHeroClick} className="text-white block hover:text-gray-200">
                Home
              </button>
            </li>
            <li className="mb-4">
              <button onClick={onServiceClick} className="text-white block hover:text-gray-200">
                Services
              </button>
            </li>
            <li className="mb-4">
              <button onClick={onBlogClick} className="text-white block hover:text-gray-200">
              Blog
              </button>
            </li>
            <li className="mb-4">
              <button onClick={onAboutUsClick} className="text-white block hover:text-gray-200">
                About Us
              </button>
            </li>
            <li className="mb-4">
              <button onClick={onContactClick} className="text-white block hover:text-gray-200">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  onBlogClick: PropTypes.func.isRequired,
  onHeroClick: PropTypes.func.isRequired,
  onServiceClick: PropTypes.func.isRequired,
  onAboutUsClick: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired,
};

export default Navbar