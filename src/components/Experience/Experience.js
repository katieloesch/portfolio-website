import React from 'react';
import { useState, useRef, useEffect, useContext} from "react"; 
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"

import { AppContainer, MotionContainer } from '../../containers';
import { CurrentContext } from '../../contexts/CurrentContext';

import { colors } from '../../assets/colors/colors';

import { experience } from './../../api_data/api_experience'
import { timelineData } from '../../api_data/api_timeline';

import './Experience.scss'


const Experience = () => {
  const active = useContext(CurrentContext)
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('experience');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#experience-dot');
  

  useEffect(() => {
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (isIntersecting) {
      active.current = 'about'
      navDots.forEach(dot => dot.style.backgroundColor = colors.navDotInactive);
      dot.style.backgroundColor = colors.navDotActive;


    }

    observer.observe(ref.current);
    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);

  
  return (
    <div className='experiences flex nav-section' ref={ref}>
      <h1 className='h-text section-heading'>Experience & Education</h1>


      <div className='experience-container flex LEGACY'>

        <motion.div className='experience-list'>
          { experience.map((period, index) => (
            <motion.div
              className={`experience-item ${index%2 === 0 ? null : 'rev'}`}
              key={`year-${period.year}`}
            >
              <div className='experience-year'>
                <p className='bold'>{period.year}</p>
                <div className='experience-img'>
                  <img src={period.exp[0].img} alt={period.exp[0].name} className={`exp-img-${index}`}/>
                </div>
              </div>

              <motion.div className='experience-works'>
                {period.exp.map((work) => (
                  <div key={`project-${work.name}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="experience-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h3 className='bold'>{work.name}</h3>
                      <h4 className='work-company'>{work.company}</h4>
                      {
                        <ul>
                        {work.description.map((descriptionItem, index) => (
                          <li className='work-description p-text' key={`experience-description-${index}`}>
                            {descriptionItem}
                          </li>
                        ))}
                        </ul>
                       
                      }
                      
                    </motion.div>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          ))}
            
        </motion.div>
      </div>

      <div className='timeline'>
        <VerticalTimeline className='timeline-container'>
          {
            timelineData.map((timelineItem, index) => (
              <VerticalTimelineElement
              key={timelineItem.key}
              date={timelineItem.date}
              dateClassName='timeline-date'
              iconStyle={timelineItem.style}
              icon = {<img src={timelineItem.img} alt={`${timelineItem.title} logo`} className='timeline-img' id={`timeline-img-${index}`} />}
              contentStyle={{ background: 'transparent' }}
              >
              <h3 className='vertical-timeline-element-title'>{timelineItem.title}</h3>
              <h4 className='vertical-timeline-element-subtitle'>{timelineItem.company}</h4>
              <ul className='timeline-item-description' id='description'>
                {timelineItem.description.map((descriptionItem, index) => (
                  <li key={`timeline-description-item-index`}>{descriptionItem}</li>
                ))}
              </ul>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
     
      </div>
      
    </div>
  )
}

export default AppContainer(
  MotionContainer(Experience, 'experience'),
   'experience',
   'bg-1'
)