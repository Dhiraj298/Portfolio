import React from 'react'
import './projectCard.css'

const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="card_container">
      <img
        src={`/assets/${imageSrc}`}
        alt={`Image of ${title}`}
        classNamecard_="image"
      />
      <h3 className="card_title">{title}</h3>
      <p className="card_description">{description}</p>
      <ul className="card_skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="card_skill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="card_links">
        <a href={demo} className="card_link">
          Demo
        </a>
        <a href={source} className="card_link">
          Source
        </a>
      </div>
    </div>
  )
}

export default ProjectCard