import React from 'react';
import './AboutIntro.scss';

const AboutIntro = ({ intro, author }) => {
  return (
    <div className='about__intro'>
      <div className='about__intro__avatar-container'>
        <img
          className='about__intro__avatar-img'
          src={intro.avatar}
          alt='avatar'
        />
      </div>

      <div className='about__intro__txt'>
        {/* <p className='about__intro__txt-p p-text'>
          I'm a
          <span>&nbsp;{author?.jobTitle ?? 'full-stack developer'}&nbsp;</span>
          with a background in
          <span>
            &nbsp;
            {author?.background ?? 'biomedical science and research'}
          </span>
          .
        </p> */}

        {intro.txt.map((intro, index) => (
          <p
            className='about__intro__txt-p p-text'
            key={`about-intro-${index}`}
          >
            {intro}
          </p>
        ))}

        <div className='about__intro__location'>
          <div className='about__intro__location-icon-container'>
            <img
              className='about__intro__location-icon'
              src={intro.icon}
              alt={intro.iconAlt}
            />
          </div>

          <p className='about__intro__txt-p p-text about__intro__location-p'>
            I'm currently based in
            <span>&nbsp;{author?.locationCity ?? 'London'}&nbsp;</span>but love
            any excuse to travel and explore new places.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
