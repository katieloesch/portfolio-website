import React from 'react';
import './AboutColumn.scss';

const Column = ({ data }) => {
  return (
    <div className={`about-column ${data.class}`}>
      <div className={'column-column__img-container'}>
        <img
          className={`about-column__img ${data.iconClass}`}
          src={data.icon}
          alt={data.iconAlt}
        />
      </div>

      <h2 className='about-column__title'>{data.title}</h2>
      <p className='about-column__txt'>{data.description}</p>
    </div>
  );
};

export default Column;
