import React from 'react';
import './about.css'
// import logo1 from '../../../public/assets/cute-boy-cartoon.png';
import { FcTemplate } from "react-icons/fc";
import { FcFilingCabinet } from "react-icons/fc";
// import { FcSelfServiceKiosk } from "react-icons/fc";
const About = () => {
  return (
    <section className="about_container" id="about">
      <h2 className="about_title">About</h2>
      <div className="about_content">
        <img
          src={"assets/cute-boy-cartoon.png"}
          alt="Me sitting with a laptop"
          className="about_aboutImage"
        />
        <ul className="about_aboutItems">
          <li className="about_aboutItem">
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className='about_icons'>
              
            <FcTemplate></FcTemplate>
            </div>
            <div className="about_aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I'm a Full stack developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="about_aboutItem">
            
             <div className='about_icons'>
              
            <FcFilingCabinet/>
              </div>
            <div className="about_aboutItemText">
              <h3>Backend Developer</h3>
              <p>
                I have setup backend using NodeJS and MongoDb for few baisc projects
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

export default About