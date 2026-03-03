import React from 'react';
import './ExperienceTimeline.css';

const experienceData = [
    {
        year: "2020 – 2026",
        role: "CSR / Collections / QA",
        company: "SET Financial Corporation (Remote)",
        description: "Focus on loan lifecycle processing and fraud mitigation."
    },
    {
        year: "2019 – 2020",
        role: "Cold Caller / Appointment Setter",
        company: "Transcends Outsourcing Group",
        description: "Focus on real estate lead generation."
    },
    {
        year: "2018 – 2019",
        role: "Team Leader / Trainer",
        company: "One Call Solutions",
        description: "Mentored agents and monitored KPIs."
    },
    {
        year: "Earlier Experience",
        role: "Sales Rep / Flight Reservations Agent",
        company: "Linkos Global & Sitel",
        description: "Provided excellent customer service and sales support."
    }
];

const ExperienceTimeline = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Professional Journey</h2>
            <div className="timeline-container">
                {experienceData.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <p className="timeline-year">{item.year}</p>
                            <h3 className="timeline-role">{item.role} <span>@ {item.company}</span></h3>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
