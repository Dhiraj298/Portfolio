import React from 'react'

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import './experience.css'


const Experience = () => {
  return (
    <section className='exp_container' id="experience">

      <h2 className='exp_title'>Skills and Experience</h2>

      <div className='exp_content'>

        <div className='exp_skills'>
          {skills.map((skill, id) => {
            return (
              <div key={id} className="exp_skill">
                <div className="exp_skillImageContainer">
                  <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className='exp_history'>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className="exp_historyItem">
                <img
                  src={`/assets/${historyItem.imageSrc}`}
                  alt={`${historyItem.organisation} `}
                />
                <div className="exp_historyItemDetails">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

    </section>
  )
}

export default Experience