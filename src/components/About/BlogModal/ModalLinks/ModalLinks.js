import React from 'react';
import './ModalLinks.scss';
import ModalLink from '../ModalLink/ModalLink';

const ModalLinks = ({ data, icons, list }) => {
  return (
    <div className='modal-links'>
      {list.map((link, index) => (
        <ModalLink
          url={data[link]}
          icon={icons[link]?.svg}
          className={link}
          key={`blog-modal-link-${index}`}
        />
      ))}
    </div>
  );
};

export default ModalLinks;
