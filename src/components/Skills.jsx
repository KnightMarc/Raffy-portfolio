import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: "Customer Support",
        icon: "headset",
        skills: ["Voice", "Email", "Chat", "Technical Support"]
    },
    {
        category: "Sales & Leads",
        icon: "trending-up",
        skills: ["Cold Calling", "Appointment Setting", "MCMVA Lead Qualification"]
    },
    {
        category: "Operations",
        icon: "activity",
        skills: ["QA Auditing", "Fraud Detection", "Workflow Optimization"]
    },
    {
        category: "Tools",
        icon: "tool",
        skills: ["CRM & Dialer Systems", "Google Workspace", "AI Resources"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Core Competencies</h2>
            <div className="skills-grid">
                {skillsData.map((item, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon-wrapper">
                            <span className={`icon-${item.icon}`}></span>
                        </div>
                        <h3 className="skill-category">{item.category}</h3>
                        <ul className="skill-list">
                            {item.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
