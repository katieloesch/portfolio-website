import React from 'react';
import { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import { CurrentContext } from '../../contexts/CurrentContext';
import ParticleBackground from './particleBackground';
import { ComponentContainer } from '../../containers';
import { author } from '../../api_data/api_author';
import { headerData as data } from '../../api_data/api_header';
import { colors } from '../../assets/colors/colors';
import { arrowIcons } from './../../assets/icons/icons_arrows';

// import ContactIcons from './ContactIcons'
import './Header.scss';

const txtVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  arrows: {
    opacity: 0,
    y: 80,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const Header = () => {
  const active = useContext(CurrentContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('home');

  // select corresponding navlink + navDot, change color when active
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#home-dot');
  // const navBarLinks = document.querySelectorAll('.nav-anchor');
  // const navBarLink = document.querySelector('#home-a');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-300px' }
    );
    if (isIntersecting) {
      active.current = 'about';
      navDots.forEach(
        (dot) => (dot.style.backgroundColor = colors.navDotInactive)
      );

      // navBarLinks.forEach(
      //   (link) => (link.style.color = colors.navLinkInactive)
      // );

      dot.style.backgroundColor = colors.homeDotActive;
      // navBarLink.style.color = colors.navLinkActive;
    }

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting, active, dot, navDots]);

  return (
    <div className='header flex nav-section' ref={ref}>
      <ParticleBackground />

      <motion.div
        className='header__text__container'
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className='header__text'>
          <div className='header__text-greeting'>
            <h3 className='header__text-greeting-item'>
              <span className='flex prompt'> {data?.prompt || '~$'}</span>
              {data?.greeting1 || 'hello world'}
            </h3>
            <h3 className='header__text-greeting-item'>
              <span className='flex prompt'> {data?.prompt || '~$'}</span>
              {data?.greeting2 || 'whoami'}
            </h3>
          </div>

          <h1 className='header__text-name'>
            <span aria-hidden='true'>
              {author?.name?.toUpperCase() ?? 'KATIE LOESCH'}
            </span>
            {author?.name?.toUpperCase() ?? 'KATIE LOESCH'}
            <span aria-hidden='true'>
              {author?.name?.toUpperCase() ?? 'KATIE LOESCH'}
            </span>
          </h1>

          <div className='header__text-job-title'>
            <h2>
              <span className='header__text-job-title__prompt'>
                {data?.prompt || '~$'}
              </span>
            </h2>
            <h2 className='header__text-job-title__title'>
              {author?.jobTitle || '~Full-Stack Developer'}
            </h2>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='header__arrows-container'
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <a href='#skills'>
          <motion.img
            variants={txtVariants}
            animate='arrows'
            src={arrowIcons.arrowsDown}
            alt='scroll down'
          />
        </a>
      </motion.div>
    </div>
  );
};

export default ComponentContainer(Header, 'home');
