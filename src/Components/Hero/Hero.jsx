import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <div className="Hero" id="Hero">
      <div className="section">
        <img className="bg-img" src="./images/hero.jpg" alt="" />
        <div className="center">
          <img className="Profile-img" src="./images/profile-3.png" alt="" />
          <h1>Naman Goel</h1>
          {/* <div className="colz-icon">
            <a href="https://github.com/Namangoel781" target="_blank">
            <img src="./images/github.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/i_am_naman781/?next=%2F"
              target=""
            >
              <img src="./images/instagram.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/naman-goel-6a6b621b6/"
              target="_blank"
            >
              <img src="./images/linkedin.png" alt="" />
            </a>
            <a href="https://twitter.com/NamanGoel555" target="_blank">
              <img src="./images/twitter.png" alt="" />
            </a>
          </div> */}
          <div className="resume">
            <a href="./images/Naman_resume.pdf"><button className="button-81">Resume</button></a>
          </div>
            
        </div>
      </div>
    </div>
  );
}
