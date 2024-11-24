import React from 'react';
import './Skills.css';
import skills from './AllSkills';

function Skills() {
    return (
        <div className="container">
            <div className="title-section">
                <h1 className="title">Skills</h1>
            </div>

            {/* Frontend Skills */}
            <div className="skill-section">
                <h2>Frontend</h2>
                <div className="skill-grid">
                    {skills[0].frontend.map((skill, index) => (
                        <div className="skills-card" key={index}>
                            <img src={skill.imgSrc} alt={`${skill.tooltipText} Icon`} />
                            <div className="tooltip">{skill.tooltipText}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Backend Skills */}
            <div className="skill-section">
                <h2>Backend</h2>
                <div className="skill-grid">
                    {skills[0].backend.map((skill, index) => (
                        <div className="skills-card" key={index}>
                            <img src={skill.imgSrc} alt={`${skill.tooltipText} Icon`} />
                            <div className="tooltip">{skill.tooltipText}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Programming Skills */}
            <div className="skill-section">
                <h2>Programming</h2>
                <div className="skill-grid">
                    {skills[0].programming.map((skill, index) => (
                        <div className="skills-card" key={index}>
                            <img src={skill.imgSrc} alt={`${skill.tooltipText} Icon`} />
                            <div className="tooltip">{skill.tooltipText}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Skills */}
            <div className="skill-section">
                <h2>Tools</h2>
                <div className="skill-grid">
                    {skills[0].tools.map((skill, index) => (
                        <div className="skills-card" key={index}>
                            <img src={skill.imgSrc} alt={`${skill.tooltipText} Icon`} />
                            <div className="tooltip">{skill.tooltipText}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
