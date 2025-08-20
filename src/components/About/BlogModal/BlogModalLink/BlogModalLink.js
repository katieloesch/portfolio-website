import React from 'react';

import './BlogModalLink.scss';

const BlogModalLink = ({ url, icon, className }) => {
  console.log(icon);
  if (url && url !== '') {
    return (
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className={`blog-modal__link ${className}-link`}
      >
        <div className={`blog-modal__link-icon-container`}>
          <img
            className={`blog-modal__link-icon blog-modal__link-icon-${className}`}
            src={icon}
            alt={`${className} icon`}
          />
        </div>
      </a>
    );
  }
};

export default BlogModalLink;
