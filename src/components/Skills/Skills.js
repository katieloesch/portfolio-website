import React from 'react';
import { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import { skills } from './../../api_data/api_skills';
import SkillsCategory from './SkillsCategory/SkillsCategory';
import { SectionHeading } from '../Shared';

import { CurrentContext } from '../../contexts/CurrentContext';
import { ComponentContainer, MotionContainer } from '../../containers';
import { colors } from '../../assets/colors/colors';
import './Skills.scss';

const Skills = () => {
  const active = useContext(CurrentContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('skills');

  // select corresponding navlink + navDot, change color when active
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#skills-dot');
  // const navBarLinks = document.querySelectorAll('.nav-anchor');
  // const navBarLink = document.querySelector('#skills-a');

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
    <div className='skills-section nav-section' ref={ref}>
      <SectionHeading section='skills'>Skills + Technologies</SectionHeading>
      <div className='skills-container'>
        <motion.div className='categories-container'>
          {skills.map((category, index) => (
            <SkillsCategory
              category={category}
              key={`skills-category-${index}`}
            />
          ))}
          {/* <div className='categories-container__top-row'>
            <SkillsCategory category={skills[0]} />
            <SkillsCategory category={skills[1]} />
          </div>
          <div className='categories-container__bottom-row'>
            <SkillsCategory category={skills[2]} />
            <SkillsCategory category={skills[3]} />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ComponentContainer(
  MotionContainer(Skills, 'skills'),
  'skills',
  'bg-1'
);
