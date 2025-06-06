import React, { useState } from 'react';

import BlogModal from '../BlogModal/BlogModal';
import './AboutCarouselMobileSlide.scss';

// import { aboutIcons as icons } from './../../../../assets/icons/icons_about';

const AboutCarouselMobileSlide = ({
  content,
  title,
  txt,
  img,
  creators,
  links,
}) => {
  const [showBlogPortal, setShowBlogPortal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeBlogPortal = () => {
    setShowBlogPortal(false);
  };

  const openBlogPortal = (content) => {
    setModalContent(content);
    setShowBlogPortal(true);
  };

  if (content === 'about') {
    return (
      <div className='mobile-slide mobile-slide-about'>
        <div className={`slide-img-container`}>{img}</div>
        <h2>{title}</h2>
        <p>{txt}</p>
      </div>
    );
  } else {
    return (
      <div className='mobile-slide mobile-slide-creators'>
        <h2>{title}</h2>
        <div className='creators'>
          {creators.map((blog) => (
            <div
              className='creator'
              key={`about-creator-${blog.className}`}
              onClick={() => openBlogPortal(blog)}
            >
              {blog.name}
            </div>
          ))}
        </div>
        <BlogModal
          type='blog-modal'
          data={modalContent}
          show={showBlogPortal}
          onCancel={closeBlogPortal}
          closeModal={closeBlogPortal}
          links={links}
        />
      </div>
    );
  }
};

export default AboutCarouselMobileSlide;
