import React from 'react';
import AboutColumn from '../../AboutColumn/AboutColumn';

import './AboutsSlide.scss';

const AboutsSlide = ({ columnData }) => {
  return (
    <div className='about-carousel__slide__content-abouts'>
      {columnData.map((about, index) => {
        return (
          <AboutColumn
            key={`about-column-${index}`}
            img={about.icon}
            title={about.title}
            txt={about.description}
          />
        );
      })}
    </div>
  );
};

export default AboutsSlide;
