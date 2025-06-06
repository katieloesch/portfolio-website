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
      <div className='about-carousel__slide-mobile__abouts about-carousel__slide-mobile'>
        <div className={'about-carousel__slide-mobile__img-container'}>
          {img}
        </div>
        <h2 className='about-carousel__slide-mobile__title'>{title}</h2>
        <p className='about-carousel__slide-mobile__p '>{txt}</p>
      </div>
    );
  } else {
    return (
      <div className='about-carousel__slide-mobile__blogs about-carousel__slide-mobile'>
        <h2 className='about-carousel__slide-mobile__title'>{title}</h2>
        <div className='about-carousel__slide-mobile__blogs-container'>
          {creators.map((blog) => (
            <div
              className='about-carousel__slide-mobile__blog-card'
              key={`mobile-about-blog-${blog.className}`}
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
