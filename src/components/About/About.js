import React, { useContext, useState, useRef, useEffect } from 'react';

import { AppContainer, MotionContainer } from '../../containers';
import { SectionHeading } from '../Shared';

import AboutsSlide from './AboutCarouselSlides/AboutsSlide/AboutsSlide';
import BlogsSlide from './AboutCarouselSlides/BlogsSlide/BlogsSlide';

import AboutCarousel from './AboutCarousel/AboutCarousel';
import AboutCarouselMobile from './AboutCarouselMobile/AboutCarouselMobile';

import AboutCarouselMobileSlide from './AboutCarouselMobileSlide/AboutCarouselMobileSlide';

import { CurrentContext } from '../../contexts/CurrentContext';
import { aboutData } from './../../api_data/api_about';
import { aboutImages as images } from '../../assets/images/about_images';
import { colors } from '../../assets/colors/colors';
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

  const mobileSlides = aboutData.abouts.map((about, index) => (
    <AboutCarouselMobileSlide
      key={`about-slide-mobile-${index}`}
      content='about'
      title={about.title}
      txt={about.description}
      img={about.mobileIcon}
    />
  ));

  return (
    <div className='about-container'>
      <SectionHeading section='about'>About</SectionHeading>

      <div className='about__content'>
        <div className='about__intro'>
          <div className='about__intro__avatar-container'>
            <img
              className='about__intro__avatar-img'
              src={images.avatar2Svg}
              alt='avatar'
            />
          </div>

          <div className='about__intro__text'>
            {aboutData.intros.map((intro, index) => (
              <p
                className='p-text about__intro__text-p'
                key={`about-intro-${index}`}
              >
                {intro}
              </p>
            ))}
          </div>
        </div>

        <div className='about__carousel-container' ref={ref}>
          <AboutCarousel
            type='about'
            slides={[
              <AboutsSlide columnData={aboutData.abouts} />,
              <BlogsSlide
                mediaData={aboutData.media}
                mediaLinks={aboutData.mediaLinks}
              />,
            ]}
          />
          <AboutCarouselMobile
            type='about-mobile'
            slides={[
              ...mobileSlides,
              <AboutCarouselMobileSlide
                content='creators'
                title='Creators & Blogs I follow:'
                creators={aboutData.media}
                links={aboutData.mediaLinks}
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AppContainer(MotionContainer(About, 'about'), 'about', 'bg-2');
