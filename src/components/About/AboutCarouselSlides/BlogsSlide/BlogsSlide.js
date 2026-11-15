import React, { useState } from 'react';

import BlogCard from '../../BlogCard/BlogCard';
import BlogModal from '../../BlogModal/BlogModal';
import './BlogsSlide.scss';

const BlogsSlide = ({ blogs, blogLinks }) => {
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
      <h2 className='about-carousel__slide__content-blogs__title'>
        Blogs & Creators I follow:
      </h2>

      <div className='about-carousel__slide__content-blogs__blogs-container'>
        {blogs.map((blog) => (
          <BlogCard
            key={`about-creator-${blog.className}`}
            blog={blog}
            onClick={() => openBlogPortal(blog)}
          />
        ))}
      </div>

      <BlogModal
        type='blog-modal'
        blog={modalContent}
        show={showBlogPortal}
        onCancel={closeBlogPortal}
        closeModal={closeBlogPortal}
        blogLinks={blogLinks}
      />
    </div>
  );
};

export default BlogsSlide;
