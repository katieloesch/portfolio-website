import React from 'react';
import { navItems } from './navItems';
import { motion } from 'framer-motion';

// import { colors } from '../../../assets/colors/colors';

import './NavBar.scss';

const NavBar = () => {
  // const handleMouseEnter = (e) => {
  //   e.target.style.color = colors.navLinkHover;
  // };

  // const handleMouseLeave = (e) => {
  //   e.target.style.color = colors.navLinkInactive;
  // };

  return (
    <motion.nav
      className='navbar'
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <ul className='nav-links'>
        {navItems.navBar.map((item) => (
          <li key={`nav-${item}`} className='flex p-text'>
            <a
              href={`#${item}`}
              className='nav-anchor'
              id={`${item}-a`}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
