import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { HiX } from 'react-icons/hi';

import { Backdrop, Carousel } from '../../Shared';
import { workIcons } from '../../../assets/icons/icons_work';
import { colors } from '../../../assets/colors/colors';

import './ProjectModal.scss';
import ProjectSkill from './ProjectSkill/ProjectSkill';

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
    <div className={`modal ${type} ${data.className}-modal`}>
      <div className='btn-close-modal'>
        <button onClick={closeModal}>
          <HiX />
        </button>
      </div>

      <div className={`modal__main`}>
        <div className='modal__main__img-container'>
          <Carousel slides={data.imgArr} type='project' />
        </div>

        <div className='modal__main__text-container'>
          <div className='heading-modal'>
            <h2>{data.title}</h2>
            <div className='modal-links'>
              <a href={data.codeLink} target='_blank' rel='noreferrer'>
                <div className='modal-link'>{workIcons.gitHub}</div>
              </a>
              <a href={data.projectLink} target='_blank' rel='noreferrer'>
                <div className='modal-link'>{workIcons.link}</div>
              </a>
            </div>
          </div>
          <ul className='modal-description'>
            {data.description.map((descriptionParagraph, index) => (
              <li
                key={`modal-description-item-${index}`}
                className='modal-description-item'
              >
                {descriptionParagraph}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className={`modal__footer`}>
        <div className='modal-skills-list flex'>
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
