import React from 'react';
import SkillsItem from '../SkillsItem/SkillsItem';
import './SkillsCategory.scss';

const SkillsCategory = ({ category }) => {
  return (
    <div className={`skills-category ${category.className}`}>
      <h2>{category.title}</h2>
      <div className='skills-list'>
        {category.list.map((skill) => (
          <SkillsItem
            name={skill.name}
            icon={skill.icon}
            id={skill.id}
            key={`skill-${skill.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCategory;
