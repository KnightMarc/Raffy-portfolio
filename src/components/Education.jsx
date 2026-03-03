import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-card">
                <div className="education-icon">
                    🎓
                </div>
                <div className="education-details">
                    <h3 className="degree">Bachelor of Science in Information Technology</h3>
                    <p className="university">AMA Computer University</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
