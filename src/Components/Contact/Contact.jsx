import React, { useState } from 'react';

export default function Contact() {
  return (
    <div className="container my-5">
  <div className="text-center mb-5">
    <h1 className="fw-bold">Connect with Me</h1>
    <p className="text-muted">Feel free to reach out through any of the platforms below.</p>
  </div>
  <div className="row g-4 justify-content-center">
    <div className="col-md-4">
      <div className="card text-center shadow-sm border-0">
        <div className="card-body">
          <i className="fab fa-linkedin fa-3x text-primary"></i>
          <h5 className="card-title mt-3">LinkedIn</h5>
          <p className="card-text">Connect with me on LinkedIn.</p>
          <a
            href="https://www.linkedin.com/in/yaraa-fouad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card text-center shadow-sm border-0">
        <div className="card-body">
          <i className="fab fa-github fa-3x text-dark"></i>
          <h5 className="card-title mt-3">GitHub</h5>
          <p className="card-text">Explore my projects on GitHub.</p>
          <a
            href="https://github.com/yarafouad22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
          >
            View Repos
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-5">
      <div className="card text-center shadow-sm border-0">
        <div className="card-body">
          <i className="fas fa-envelope fa-3x text-danger"></i>
          <h5 className="card-title mt-3">Email</h5>
          <p className="card-text">Get in touch via email.</p>
          <a
            href="mailto:yaraf4902@gmail.com"
            className="btn btn-danger btn-sm"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  </div>
</div>)
}