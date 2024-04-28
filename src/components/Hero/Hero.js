import React from 'react'
import './hero.css'
// import logo from '/assets/3d-rendering-cartoon-like-man-working-computer_23-2150797572.jpg';
const Hero = () => {

  return (
    <section className="hero_container">
      <div className="hero_content">
        <h1 className="hero_title">Hi, I'm Dhiraj</h1>
        <p className="hero_description">
          I'm a full-stack developer with skills such as React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:dhirajisme@gmail.com" className="hero_contactBtn">
          Contact Me
        </a>
      </div>
      <img
        src={'/assets/3d-rendering-cartoon-like-man-working-computer_23-2150797572.jpg'}
        alt="Hero of me"
        className="hero_heroImg"
      />
      <div className="hero_topBlur" />
      <div className="hero_bottomBlur" />
    </section>
  )
}

export default Hero