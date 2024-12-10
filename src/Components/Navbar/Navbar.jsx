import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
     
      <div className="nav-item">
        <Link className="nav-link active w-50" aria-current="page" to="/">
          <img className="w-25" src="/photo_2024-11-19_00-10-57-modified.png" alt="Brand Logo" />
        </Link>
      </div>
      
  
      <div className="collapse navbar-collapse d-flex justify-content-center w-50" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="about">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
};
