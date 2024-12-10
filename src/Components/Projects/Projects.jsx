import React, { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Movies React App',
      description: 'A movie app built with React and Redux that fetches data from a movie API.',
      imgUrl: '/Screenshot (91).png',
      link: 'https://github.com/yarafouad22/movies-react.js',
      category: 'Web Development',
      language: 'React.js',
    },
    {
      title: 'Weather App',
      description: 'A weather app that fetches data from the OpenWeatherMap API to display weather information.',
      imgUrl: '/Screenshot (73).png',
      link: 'https://github.com/yarafouad22/Weather',
      category: 'Web Development',
      language: 'JavaScript, API',
    },
    {
      title: 'CRUD Operations',
      description: 'A simple CRUD app built with JavaScript to perform create, read, update, and delete actions.',
      imgUrl: '/Screenshot (72).png',
      link: 'https://github.com/yarafouad22/CRUDS',
      category: 'Web Development',
      language: 'JavaScript',
    },
    {
      title: 'Games API Project',
      description: 'A project that fetches data from a gaming API to display information about different games.',
      imgUrl: '/Screenshot (65).png',
      link: 'https://github.com/yarafouad22/games',
      category: 'Web Development',
      language: 'JavaScript, API',
    },
    {
      title: 'Fokir Bootstrap Project',
      description: 'A Bootstrap-based website with a responsive design showcasing various sections and features.',
      imgUrl: '/Screenshot (66).png',
      link: 'https://github.com/yarafouad22/Fokir',
      category: 'Web Development',
      language: 'HTML, Bootstrap',
    },
    {
      title: 'API Project',
      description: 'A project that works with an API to fetch and display data in a user-friendly interface.',
      imgUrl: '/Screenshot (92).png',
      link: 'https://github.com/yarafouad22/Api',
      category: 'Web Development',
      language: 'JavaScript, API',
    },
  ];
  


  const [filter, setFilter] = useState('All');


  const filteredProjects = projects.filter((project) =>
    filter === 'All' || project.category === filter || project.language === filter
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>

   
      <div className="mb-4 text-center">
        <button onClick={() => setFilter('All')} className="btn btn-outline-primary mx-2">
          All
        </button>
        <button onClick={() => setFilter('JavaScript')} className="btn btn-outline-primary mx-2">
          JavaScript
        </button>
        <button onClick={() => setFilter('JavaScript, API')} className="btn btn-outline-primary mx-2">
          API
        </button>
        <button onClick={() => setFilter('React.js')} className="btn btn-outline-primary mx-2">
          React.js
        </button>
        <button onClick={() => setFilter('HTML, Bootstrap')} className="btn btn-outline-primary mx-2">
          HTML & CSS and Bootstrap
        </button>

      </div>

      <div className="row">
        {filteredProjects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={project.imgUrl}  className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
