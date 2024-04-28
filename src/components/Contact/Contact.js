import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <footer id="contact" className="contact_container">
      <div className="contact_text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="contact_links">
        <li className="contact_link">
          <img src={`/assets/contact/emailIcon.png`} alt="Email icon" />
          <a href="mailto:dhirajisme123@gmail.com">dhirajisme123@gmail.com</a>
        </li>
        <li className="contact_link">
          <img
            src={"/assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/dhiraj-kothawade">linkedin.com/dhiraj-kothawade</a>
        </li>
        <li className="contact_link">
          <img src={"/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://www.github.com/Dhiraj298">github.com/Dhiraj298</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact