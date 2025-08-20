import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { HiX } from 'react-icons/hi';

import Backdrop from '../../Shared/Backdrop/Backdrop';
import BlogModalLinks from './BlogModalLinks/BlogModalLinks';
import { aIcons } from '../../../assets/icons/icons_about';

import './BlogModal.scss';

const Overlay = ({ show, blog, closeModal, blogLinks }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const content = (
    <div className={`blog-modal ${blog.className}-modal`}>
      <div className='blog-modal__btn-close'>
        <button onClick={closeModal}>
          <HiX />
        </button>
      </div>

      <div className='blog-modal__header'>
        <h2 className='blog_modal__heading'>{blog.name}</h2>
      </div>

      <BlogModalLinks blog={blog} icons={aIcons} platforms={blogLinks} />

      <div className={`blog-modal__main`}>
        <div className='blog-modal__main__img-container'>
          <img src={blog.img} alt={blog.imgAlt} />
        </div>
        <div className='blog-modal__main__text-container'>
          <ul className='blog-modal-description'>
            {blog.description.map((descriptionParagraph, index) => (
              <li
                key={`blog-modal-description-item-${index}`}
                className='blog-modal-description-item'
              >
                {descriptionParagraph}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const BlogModal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <Overlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default BlogModal;
