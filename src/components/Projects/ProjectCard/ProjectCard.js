import React from 'react';
import { BsEyeFill } from 'react-icons/bs';

import './ProjectCard.scss';

const ProjectCard = ({
  img,
  alt,
  projectTitle,
  onClick,
  imgEffects,
  overlayEffects,
  projectOverview,
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
            <p key={`${projectTitle}-overview__title`}>
              {projectOverview.heading}
            </p>
            <p key={`${projectTitle}-overview__stack`}>
              {projectOverview.stack}
            </p>
          </div>

          <button className='project-card__img-overlay__btn' onClick={onClick}>
            <div className='project-card__img-overlay__btn-icon-container'>
              <BsEyeFill className='work-icon' />
            </div>
          </button>
        </div>
      </div>

      <div className={`project-card__txt-container`}>
        <h4>{projectTitle}</h4>

        <div className={`project-card__img-overlay-mobile ${overlayEffects}`}>
          <div className={`project-card__img-overlay__overview`}>
            <p
              key={`${projectTitle}-overview__title`}
              className={`project-card__img-overlay__overview-heading`}
            >
              {projectOverview.heading}
            </p>
            <p
              key={`${projectTitle}-overview__stack`}
              className={`project-card__img-overlay__overview-stack`}
            >
              {projectOverview.stack}
            </p>
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
