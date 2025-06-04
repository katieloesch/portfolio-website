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
    <div className={`${type}-carousel`}>
      <div className='carousel-container'>
        {slides.map((img, index) => (
          <div
            className={`slide ${
              index === slideIndex ? 'slide-active' : 'slide-hidden'
            }`}
            key={`carousel-slide-${img.id}`}
          >
            <img
              className={`${img.type} slide-img`}
              src={img.src}
              alt={img.title}
            />
          </div>
        ))}
        <div className='btns-carousel'>
          <button onClick={prevSlide} className='btn-carousel-prev'>
            {arrowIcons.arrowLeft}
          </button>
          <button onClick={nextSlide} className='btn-carousel-next'>
            {arrowIcons.arrowRight}
          </button>
        </div>
      </div>

      <div className='dots-carousel'>
        {slides.map((img, index) => (
          <div
            key={`carousel-dot-${index}`}
            className={`dot-carousel ${
              index === slideIndex ? 'active' : 'inactive'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImgCarousel;
