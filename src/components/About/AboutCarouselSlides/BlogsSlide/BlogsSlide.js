import React, { useState } from 'react';

import BlogCard from '../../BlogCard/BlogCard';
import BlogModal from '../../BlogModal/BlogModal';
import './BlogsSlide.scss';

const BlogsSlide = ({ mediaData, mediaLinks }) => {
  const [showBlogPortal, setShowBlogPortal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeBlogPortal = () => {
    setShowBlogPortal(false);
  };

  const openBlogPortal = (content) => {
    setModalContent(content);
    setShowBlogPortal(true);
  };

  return (
    <div className='about-carousel__slide__content-blogs'>
      <h2 className='grad1 about-carousel__slide__content-blogs__title'>
        Blogs & Creators I follow:
      </h2>

      <div className='about-carousel__slide__content-blogs__blogs-container'>
        {mediaData.map((blog) => (
          <BlogCard
            key={`about-creator-${blog.className}`}
            blog={blog}
            onClick={() => openBlogPortal(blog)}
          />
        ))}
      </div>

      <BlogModal
        type='blog-modal'
        data={modalContent}
        show={showBlogPortal}
        onCancel={closeBlogPortal}
        closeModal={closeBlogPortal}
        links={mediaLinks}
      />
    </div>
  );
};

export default BlogsSlide;
