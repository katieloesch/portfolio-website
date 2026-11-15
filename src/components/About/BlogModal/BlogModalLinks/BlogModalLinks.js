import React from 'react';

import BlogModalLink from '../BlogModalLink/BlogModalLink';
import { aboutIcons as icons } from '../../../../assets/icons/icons_about';
import './BlogModalLinks.scss';

const BlogModalLinks = ({ blog, platforms }) => {
  return (
    <div className='blog-modal__links-container'>
      {platforms.map((platform, index) => (
        <BlogModalLink
          url={blog[platform]}
          icon={icons[platform]}
          className={platform}
          key={`blog-modal-link-${index}`}
        />
      ))}
    </div>
  );
};

export default BlogModalLinks;
