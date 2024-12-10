import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
          <h6>Follow Me</h6>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100016569887223&mibextid=ZbWKwL" className="text-light mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/YaraFouad177473?t=Tc-k2awq90hsx8pn98OEhA&s=09" className="text-light mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yaraa-fouad/" className="text-light mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/yara.f.gerges/profilecard/?igsh=MTExZzZjeDkwbjg5Zw==" className="text-light mx-2">
              <FaInstagram size={24} />
            </a>
          </div>
          </div>
          </div>
          <div className="mt-4">
        <div className="bg-gradient-dark py-2 text-center">
          <p className="mb-0">&copy; 2024 Yara Fouad. All Rights Reserved.</p>
        </div>
      </div>
       </div>
    </footer>
  );
}  