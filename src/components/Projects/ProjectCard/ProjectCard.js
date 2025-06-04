import React from 'react';
import { BsEyeFill } from 'react-icons/bs';

import './ProjectCard.scss';

const ProjectCard = ({
  img,
  alt,
  txt,
  onClick,
  imgEffects,
  overlayEffects,
  overview,
}) => {
  return (
    <div className={`card project-card`}>
      <div className={`project-card__img-container`}>
        <img
          className={`project-card__img ${imgEffects}`}
          src={img}
          alt={alt}
        />
        <div className={`project-card__img-overlay ${overlayEffects}`}>
          <div className={`project-card__img-overlay__overview`}>
            {overview.map((txt) => (
              <p key={`${txt}-overview`}>{txt}</p>
            ))}
          </div>

          <button className='project-card__img-overlay__btn' onClick={onClick}>
            <div className='project-card__img-overlay__btn-icon-container'>
              <BsEyeFill className='work-icon' />
            </div>
          </button>
        </div>
      </div>
      <div className={`project-card__txt-container`}>
        <h4>{txt}</h4>

        <div className={`project-card__img-overlay-mobile ${overlayEffects}`}>
          <div className={`project-card__img-overlay__overview`}>
            {overview.map((txt) => (
              <p key={`${txt}-overview`}>{txt}</p>
            ))}
          </div>

          <button className='project-card__img-overlay__btn' onClick={onClick}>
            <div className='project-card__img-overlay__btn-icon-container'>
              <BsEyeFill className='work-icon' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
