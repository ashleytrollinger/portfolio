import React from 'react';
import './ProjectCards.css';

export default function ProjectCard({ title, description, imageUrl, liveLink, githubLink }) {

    return (
        <div className="project-card">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} />
            <p>{description}</p>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                Live Link
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Link
            </a>
        </div>
    );
};

