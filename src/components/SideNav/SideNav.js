import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGRZ6LrOK2y7Q/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=yy-O1jjNlBziV5Dan20bcXUZsWsVnQIYy6uSkP9gdBw"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Dhruva Shah</h2>
            <p className="subtitle">"A Girl Who Codes"<span role="img">👩‍💻</span></p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Education</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("experiences")}>Experience</p>
            </div>
        </div>
    );
};