import React from 'react';

import { ExperienceCard } from '../Experiencecard/ExperienceCard';

import './experience.css';

export const Experiences = ({ experiences }) => {
    return (
        <div className="projects-container">
            <div className="industry-skill-container">
                {
                    experiences.experienceList.map(experience => <ExperienceCard experience={experience} />)
                }
            </div>
        </div>
    )
}