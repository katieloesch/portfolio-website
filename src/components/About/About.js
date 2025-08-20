import React, { useContext, useState, useRef, useEffect } from 'react';

import { ComponentContainer, MotionContainer } from '../../containers';
import { SectionHeading } from '../Shared';

import { CurrentContext } from '../../contexts/CurrentContext';

import AboutIntro from './AboutIntro/AboutIntro';
import AboutCarousel from './AboutCarousel/AboutCarousel';
import { AboutsSlide, BlogsSlide } from './AboutCarouselSlides';
import AboutCarouselMobile from './AboutCarouselMobile/AboutCarouselMobile';
import AboutCarouselMobileSlide from './AboutCarouselMobileSlide/AboutCarouselMobileSlide';

import { aboutData as data } from './../../api_data/api_about';
import { colors } from '../../assets/colors/colors';
import { author } from '../../api_data/api_author';
import './About.scss';

const About = () => {
  const active = useContext(CurrentContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('about');

  // select corresponding navlink + navDot, change color when active
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#about-dot');
  // const navBarLinks = document.querySelectorAll('.nav-anchor');
  // const navBarLink = document.querySelector('#about-a');

  const carouselSlides = [
    <AboutsSlide key='abouts-slide' columnData={data.columnData} />,
    <BlogsSlide
      key='blogs-slide'
      blogs={data.blogs}
      blogLinks={data.blogLinks}
    />,
  ];

  const carouselMobileSlides = data.columnData.map((column, index) => (
    <AboutCarouselMobileSlide
      key={`about-slide-mobile-${index}`}
      content='about'
      data={column}
    />
  ));

  carouselMobileSlides.push(
    <AboutCarouselMobileSlide
      content='creators'
      title='Creators & Blogs I follow:'
      blogs={data.blogs}
      blogLinks={data.blogLinks}
    />
  );

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

      dot.style.backgroundColor = colors.navDotActive;
      // navBarLink.style.color = colors.navLinkActive;
    }

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting, active, dot, navDots]);

  return (
    <div className='about-container'>
      <SectionHeading section='about'>About</SectionHeading>

      <div className='about__content' ref={ref}>
        <AboutIntro intro={data.intro} author={author} />

        <div className='about__carousel-container' ref={ref}>
          <AboutCarousel slides={carouselSlides} />
          <AboutCarouselMobile slides={carouselMobileSlides} />
        </div>
      </div>
    </div>
  );
};

export default ComponentContainer(
  MotionContainer(About, 'about'),
  'about',
  'bg-2'
);
