import React from 'react';

import BlogModalLink from '../BlogModalLink/BlogModalLink';
import './BlogModalLinks.scss';

const BlogModalLinks = ({ data, icons, list }) => {
  return (
    <div className='blog-modal__links-container'>
      {list.map((link, index) => (
        <BlogModalLink
          url={data[link]}
          icon={icons[link]?.svg}
          className={link}
          key={`blog-modal-link-${index}`}
        />
      ))}
    </div>
  );
};

export default BlogModalLinks;
