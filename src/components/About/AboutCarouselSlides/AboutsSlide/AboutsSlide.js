import React from 'react';
import AboutColumn from '../../AboutColumn/AboutColumn';

import './AboutsSlide.scss';

const AboutsSlide = ({ columnData }) => {
  return (
    <div className='about-carousel__slide__content-abouts'>
      {columnData.map((column, index) => {
        return <AboutColumn key={`about-column-${index}`} data={column} />;
      })}
    </div>
  );
};

export default AboutsSlide;
