import React from 'react'
import '../App.css';

export function About() {
  return (
      <>
   
 <div className = "about-wrapper">
      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = "https://icons-for-free.com/download-icon-coding+dev+development+programming+tag+icon-1320165734987953368_512.png" />
              </div>
            </div>

            <h2>Hadeel Ahmed</h2>
            <h3>Softwre Engneer</h3>
          </div>

          <ul className = "icons">
            <li><i className = "fab fa-facebook-f"></i></li>
            <li><i className = "fab fa-twitter"></i></li>
            <li><i className = "fab fa-linkedin"></i></li>
            <li><i className = "fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>

      <div className = "about-right">
        <h1>hi<span>!</span></h1>
        <h2>Here's who I am & what I do</h2>
        

        <div className = "about-para">
          <p>I'm interested in learning more about Fron-End I think it's the  challenge of these days </p>
          <p>Today I'm here to explore the world of React </p>
        </div>
      </div>
    </div>
    
  </>
 
  )
}
