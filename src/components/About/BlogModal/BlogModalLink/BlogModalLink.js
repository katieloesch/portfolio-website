import React from 'react';

import './BlogModalLink.scss';

const BlogModalLink = ({ url, icon, className }) => {
  if (url && url !== '') {
    return (
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className={`blog-modal__link ${className}-link`}
      >
        <div className={`blog-modal__link-icon ${className}-icon`}>{icon}</div>
      </a>
    );
  }
};

export default BlogModalLink;
