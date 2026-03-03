import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <p className="hero-greeting">Welcome to the portfolio of</p>
                <h1 className="hero-name">Raffy Ismael Aurora.</h1>
                <h2 className="hero-headline">Customer Service Specialist | Quality Assurance | Collections</h2>
                <p className="hero-subline">
                    10+ years of experience supporting global clients across the US, Australia, Singapore, and Malaysia.
                </p>
                <div className="hero-ctas">
                    <a href="#experience" className="btn btn-primary">View My Experience</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
