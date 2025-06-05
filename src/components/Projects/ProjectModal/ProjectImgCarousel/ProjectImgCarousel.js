import React, { useState } from 'react';

import { arrowIcons } from '../../../../assets/icons/icons_arrows';
import './ProjectImgCarousel.scss';

const ProjectImgCarousel = ({ slides, type }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className={'project-img-carousel__container'}>
      <div className='project-img-carousel__btns'>
        <button
          onClick={prevSlide}
          className='project-img-carousel__btn project-img-carousel__btn-prev'
        >
          {arrowIcons.arrowLeft}
        </button>

        <button
          onClick={nextSlide}
          className='project-img-carousel__btn project-img-carousel__btn-next'
        >
          {arrowIcons.arrowRight}
        </button>
      </div>

      <div className='project-img-carousel__slides-container'>
        {slides.map((img, index) => (
          <div
            className={`project-img-carousel__slide ${
              index === slideIndex ? 'slide-active' : 'slide-hidden'
            }`}
            key={`carousel-slide-${img.id}`}
          >
            <img
              className={`${img.type} project-img-carousel__slide-img`}
              src={img.src}
              alt={img.title}
            />
          </div>
        ))}
      </div>

      <div className='project-img-carousel__dots'>
        {slides.map((img, index) => (
          <div
            key={`carousel-dot-${index}`}
            className={`project-img-carousel__dot ${
              index === slideIndex ? 'active' : 'inactive'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImgCarousel;
