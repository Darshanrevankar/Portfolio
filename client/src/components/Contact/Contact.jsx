import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../Contact/Contact.css'
function Contact() {
    return (
        <div className="container">
            <div className="title-section">
                    <h1 className="title">Contact Me</h1>
                </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <div className="info-label">Email</div>
                            <div className="info-value">darshanrevanakr2019@gmail.com</div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <div className="info-label">Phone</div>
                            <div className="info-value">+91 6362899135</div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <div className="info-label">Birthday</div>
                            <div className="info-value">Oct 11, 2003</div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <div className="info-label">Location</div>
                            <div className="info-value">Belgavi, Karnataka, India</div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="contact-form">
                    <div className="form-row">
                        <div className="input-group">
                            <input type="text" placeholder="First Name" required />
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email address" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Social Links */}
            <div className="social-links">
                <a href="/about" className="social-icon" aria-label="Instagram">
                    <FontAwesomeIcon className='media_icon' icon={faInstagram} />
                </a>
                <a href="/about" className="social-icon" aria-label="Twitter">
                <FontAwesomeIcon className='media_icon' icon={faTwitter} />
                </a>
                <a href="/about" className="social-icon" aria-label="LinkedIn">
                <FontAwesomeIcon className='media_icon' icon={faLinkedin} />
                </a>
                <a href="/about" className="social-icon" aria-label="GitHub">
                <FontAwesomeIcon className='media_icon' icon={faGithub} />
                </a>
                <a href="/about" className="social-icon" aria-label="WhatsApp">
                <FontAwesomeIcon className='media_icon' icon={faWhatsapp} />
                </a>
            </div>
        </div>

    )
}

export default Contact