import React from 'react'
import WhatIDo from '../What-i-do/WhatIDo';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <section className="home">
      <div className="container text-center">
        <h2 className='name'>Hi, I'm <span>Yara Fouad</span></h2>
        <h4>
        Front-End Developer dedicated to crafting innovative and user-centered digital experiences with expertise in modern web technologies.
        </h4>
        <div className="buttons">
          <Link to="projects" className="btn btn-primary contact">View My Work</Link>
          <Link to="contact" className="btn btn-outline-primary contact">Contact Me</Link>
         </div>
        <WhatIDo/>
        <Skills/>
        <Contact/>
      </div>
    </section>
  );
}

