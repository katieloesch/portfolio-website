import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { HiX } from 'react-icons/hi';

import { Backdrop } from '../../Shared';
import ProjectImgCarousel from './ProjectImgCarousel/ProjectImgCarousel';
import { workIcons } from '../../../assets/icons/icons_work';
import { colors } from '../../../assets/colors/colors';
import ProjectSkill from './ProjectSkill/ProjectSkill';
import './ProjectModal.scss';

const Overlay = ({ show, type, data, closeModal }) => {
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
    <div className={`project-modal ${data.className}-modal`}>
      <div className='project-modal__links-container'>
        <div className='project-modal__links'>
          <a href={data.codeLink} target='_blank' rel='noreferrer'>
            <div className='project-modal__link'>{workIcons.gitHub}</div>
          </a>
          <a href={data.projectLink} target='_blank' rel='noreferrer'>
            <div className='project-modal__link'>{workIcons.link}</div>
          </a>
        </div>
        <div></div>
      </div>

      <div className='project-modal__btn-close-modal'>
        <button onClick={closeModal}>
          <HiX />
        </button>
      </div>

      <div className='project-modal__header'>
        <h2 className='project_modal__heading'>{data.title}</h2>
      </div>

      <div className={'project-modal__main'}>
        <div className='project-modal__main__carousel-container'>
          <ProjectImgCarousel slides={data.imgArr} type='project' />
        </div>

        <div className='project_modal__main__text-container'>
          <ul className='project_modal__main__text-description'>
            {data.description.map((descriptionParagraph, index) => (
              <li
                key={`modal-description-item-${index}`}
                className='project_modal__main__text-description-item'
              >
                {descriptionParagraph}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className={'project-modal__footer'}>
        <div className='project-modal__footer__skills'>
          {data.skills.map((skill) => (
            <ProjectSkill
              name={skill.name}
              icon={skill.icon}
              className={`modal-skills-item`}
              id={skill.id}
              bg={colors.skillBg}
              key={`modal-skill-${skill.id}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const ProjectModal = (props) => {
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

export default ProjectModal;
