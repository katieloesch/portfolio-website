import React from 'react';
import './ProjectSkill.scss';

const ProjectSkill = ({ id, bg, icon, name, className }) => {
  return (
    <div className={`${className} flex`} id={id}>
      <div className='flex' style={{ backgroundColor: bg }}>
        <img src={icon} alt={name} />
      </div>
      <p className='p-text'>{name}</p>
    </div>
  );
};

export default ProjectSkill;
