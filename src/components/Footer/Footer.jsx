import React from "react";
import { FaEnvelope, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Footer = ({onServiceClick, onAboutUsClick, onBlogClick, onContactClick, onNavbarclick}) => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Journey of NexaDesigns</h1>
            <p className="text-dark2">
            Our journey began with a simple idea – to bridge the gap between design, functionality, and user experience. Founded by a team of visionary designers and developers, 
            NexaDesigns started as a small project but quickly grew into a full-fledged agency, driven by a shared passion for digital innovation.
             Over the years, we’ve evolved from crafting basic websites to delivering complete digital experiences, helping clients across diverse industries unlock their potential.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onServiceClick}>
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onServiceClick}>
                    UI/UX Design
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onServiceClick}>
                    Content Strategy
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onNavbarclick}>
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onServiceClick}>
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onBlogClick}>
                    Blogs
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onAboutUsClick}>
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200" onClick={onContactClick}>
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
                <a href="https://wa.me/qr/MYFQNI2R6YAPO1 ">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                </a>
              <a href="mailto:chathuryahiruni123@gmail.com">
                <FaEnvelope className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="http://www.linkedin.com/in/chathurya-hiruni-802146238/">
                <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.facebook.com/chathurya.kalupahana?mibextid=ZbWKwL">
                <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

Footer.propTypes = {
  onServiceClick: PropTypes.func.isRequired,
  onAboutUsClick: PropTypes.func.isRequired,
  onBlogClick: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired,
  onNavbarclick: PropTypes.func.isRequired,
};

export default Footer;
