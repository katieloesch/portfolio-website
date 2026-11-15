import React, { useState } from 'react';

import BlogModal from '../BlogModal/BlogModal';
import './AboutCarouselMobileSlide.scss';

// import { aboutIcons as icons } from './../../../../assets/icons/icons_about';

const AboutCarouselMobileSlide = (props) => {
  const [showBlogPortal, setShowBlogPortal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeBlogPortal = () => {
    setShowBlogPortal(false);
  };

  const openBlogPortal = (content) => {
    setModalContent(content);
    setShowBlogPortal(true);
  };

  if (props.content === 'about') {
    return (
      <div
        className={`about-carousel__slide-mobile about-carousel__slide-mobile-about ${props.data.class}-mobile`}
      >
        <div className={'about-carousel__slide-mobile__img-container'}>
          <img
            src={props.data.icon}
            alt={props.data.iconAlt}
            className={`about-carousel__slide-mobile__img ${props.data.iconClass}-mobile`}
          />
        </div>
        <h2 className='about-carousel__slide-mobile__title'>
          {props.data.title}
        </h2>
        <p className='about-carousel__slide-mobile__column-txt-p '>
          {props.data.description}
        </p>
      </div>
    );
  } else {
    return (
      <div className='about-carousel__slide-mobile about-carousel__slide-mobile-blogs'>
        <h2 className='about-carousel__slide-mobile__title'>{props.title}</h2>
        <div className='about-carousel__slide-mobile__blogs-container'>
          {props.blogs.map((blog) => (
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
          blog={modalContent}
          show={showBlogPortal}
          onCancel={closeBlogPortal}
          closeModal={closeBlogPortal}
          blogLinks={props.blogLinks}
        />
      </div>
    );
  }
};

export default AboutCarouselMobileSlide;
