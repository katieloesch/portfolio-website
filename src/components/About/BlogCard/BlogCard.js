import React from 'react';
import './BlogCard.scss';

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      className={`about-carousel__slide__blog-card ${blog.className}`}
      key={`about-carousel__slide__blog-card-${blog.className}`}
      onClick={onClick}
    >
      <div className='about-carousel__slide__blog-card__img-container'>
        <img
          className={`${blog.className}-img`}
          src={blog.img}
          alt={blog.alt}
        />
      </div>
      <p
        className={`about-carousel__slide__blog-card__name ${blog.className}-label`}
      >
        {blog.name}
      </p>
    </div>
  );
};

export default BlogCard;
