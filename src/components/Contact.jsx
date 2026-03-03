import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title section-title-center">Get In Touch</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <p className="contact-desc">
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <ul className="contact-details">
                            <li>
                                <span className="contact-icon">📍</span>
                                Pangasinan, Philippines
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:raffyiaurora@gmail.com">raffyiaurora@gmail.com</a>
                            </li>
                            <li>
                                <span className="contact-icon">📱</span>
                                +63993-458-3109
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Designed & Built for Raffy Ismael Aurora</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
