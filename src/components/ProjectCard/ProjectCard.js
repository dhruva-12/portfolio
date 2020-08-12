import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b></b> {project.name}</p>
            <p><b></b> {project.description}</p>
            <p><b></b> {project.link} </p>
        </div>
    )
}