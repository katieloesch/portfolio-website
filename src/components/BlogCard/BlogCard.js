import React from 'react';
import './BlogCard.scss';

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      className={`about-creator ${blog.className}`}
      key={`about-media-item-${blog.className}`}
      onClick={onClick}
    >
      <p>{blog.name}</p>

      <div className='img-container'>
        <img
          className={`${blog.className}-img`}
          src={blog.img}
          alt={blog.alt}
        />
      </div>
    </div>
  );
};

export default BlogCard;
