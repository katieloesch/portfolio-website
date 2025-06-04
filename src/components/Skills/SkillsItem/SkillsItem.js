import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../../assets/colors/colors';
import './SkillsItem.scss';

const SkillsItem = ({ name, icon, id }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='skills-item flex'
      id={id}
      key={`skill-${name}`}
    >
      <div className='flex' style={{ backgroundColor: colors.skillBg }}>
        <img src={icon} alt={name} />
      </div>
      <p className='p-text'>{name}</p>
    </motion.div>
  );
};

export default SkillsItem;
