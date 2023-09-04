import React from 'react';
import ProjectCard from '../builders/ProjectCards';
import './Projects.css';

export default function Projects() {
    const projectsData = [
        {
            title: 'JamSphere',
            description: 'Music sharing social media platform',
            imageUrl: '/jamsphere.png', // You should place your project images in the public directory
            liveLink: 'https://jamsphere-ad4807320222.herokuapp.com/',
            githubLink: 'https://github.com/ashleytrollinger/JamSphere',
        },
        {
            title: 'RemembrWhn',
            description: 'Virtual time capsule to store memories for a designated period of time',
            imageUrl: '/RemembrWhn.png', // You should place your project images in the public directory
            liveLink: 'https://remembrwhn-nur09010i-ashleytrollinger.vercel.app/',
            githubLink: 'https://github.com/ashleytrollinger/remembrwhn',
        },
        {
            title: 'React Portfolio',
            description: 'First time using react, first draft of my professional portfolio',
            imageUrl: '/ReactP.png', // You should place your project images in the public directory
            liveLink: 'https://ashleytrollinger.github.io/react-portfolio/',
            githubLink: 'https://github.com/ashleytrollinger/react-portfolio',
        },
        {
            title: 'Weather Dashboard',
            description: 'Works with OpenWeatherMap to create a 7 day weather forcaster',
            imageUrl: '/weather.png', // You should place your project images in the public directory
            liveLink: '',
            githubLink: 'https://github.com/ashleytrollinger/Weather-Dashboard',
        },

        // Repeat this structure for your other projects
    ];
    return (
       <section className='projects'>
        <h2>Projects</h2>
        <div className="projects-container">
 
            {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
        </section>
    )
}