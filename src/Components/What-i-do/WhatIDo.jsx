import React from "react";


function WhatIDo() {
  const services = [
    {
      title: "Responsive Websites",
      description:
        "Creating fully responsive designs for seamless user experiences on all devices.",
      icon: "bi-phone",
    },
    {
      title: "Interactive UI/UX",
      description:
        "Designing interactive and user-friendly interfaces that keep users engaged.",
      icon: "bi-layout-text-window",
    },
    {
      title: "API Integration",
      description:
        "Ensuring smooth communication between front-end and back-end systems.",
      icon: "bi-cloud-arrow-down",
    },
    {
      title: "Modern Technologies",
      description:
        "Proficient in React, Context API, Sass, Bootstrap, and more for efficient development.",
      icon: "bi-gear",
    },
  ];

  return (
    <section className="what-i-do py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">What I Do</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className={`bi ${service.icon} service-icon`}></i>
                  <h5 className="card-title mt-3">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
