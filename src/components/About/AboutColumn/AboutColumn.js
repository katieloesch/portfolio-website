import React from 'react';
import './AboutColumn.scss';

const Column = ({ img, title, txt }) => {
  return (
    <div className={'about-column'}>
      <div className={`column-img-container ${img.className}`}>{img}</div>

      <h2 className='grad1'>{title}</h2>
      <p>{txt}</p>
    </div>
  );
};

export default Column;
