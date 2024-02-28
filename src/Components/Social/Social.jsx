import React from 'react'
import './Social.css';

export default function Social() {
  return (
    <div className='social' id='Social'>
        <h3>Connect me here</h3>
        <div className="media">
        <div className="media-1"><a href="https://www.instagram.com/i_am_naman781/"><i class="fa-brands fa-instagram"></i><span>Instagram</span></a></div>
        <div className="media-1"><a href="https://twitter.com/NamanGoel555"><i class="fa-brands fa-square-x-twitter"></i><span>Twitter</span></a></div>
        <div className="media-1"><a href="https://www.linkedin.com/in/naman-goel-6a6b621b6/"><i class="fa-brands fa-linkedin"></i><span>Linkedin</span></a></div>
        <div className="media-1"><a href="https://github.com/Namangoel781"><i class="fa-brands fa-github"></i><span>Github</span></a></div>
        <div className="media-1"><a href="namangoel781@gmail.com"><i class="fa-solid fa-envelope"></i><span>Email</span></a></div>
        </div>
    </div>
  )
}
