import React from 'react'
import '../Home/Home.css'
import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img1.png'

import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="container">
            <div className="about">
                <div className="title-section">
                    <h1 className="title">About Us</h1>
                </div>

                <div className="about-content">
                    <div className="card_image">
                        <img src={img2} alt="Profile" />
                    </div>

                    <div className="text-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit, dolore velit maxime
                            asperiores quia neque? Consequuntur magni quasi laboriosam accusamus quisquam officiis sint,
                            architecto impedit harum saepe amet nobis fugit dolores quae iste iure alias ipsam explicabo
                            itaque maiores voluptate eveniet commodi.
                        </p>

                        <button className="button-28" role="button">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="status">
                <section className="skills-section">
                    <h1>What I Know</h1>
                    <div className="skills-container">
                        <div className="skill-card">
                            <div className="image">
                                <img src={img2} alt="Web Development" className="skill-icon" />
                            </div>
                            <div className="info">
                                <h3>Web Development</h3>
                                <p>Proficient in React.js for frontend and Express.js with MongoDB for backend solutions.</p>
                            </div>
                        </div>

                        <div className="skill-card">
                            <div className="image">
                                <img src={img2} alt="Web Development" className="skill-icon" />
                            </div>
                            <div className="info">
                                <h3>Web Development</h3>
                                <p>Proficient in React.js for frontend and Express.js with MongoDB for backend solutions.</p>
                            </div>
                        </div>

                        <div className="skill-card">
                            <div className="image">
                                <img src={img2} alt="Web Development" className="skill-icon" />
                            </div>
                            <div className="info">
                                <h3>Machine Learning</h3>
                                <p>Building predictive models and working with data for intelligent solutions.</p>
                            </div>
                        </div>
                        <div className="skill-card">
                            <div className="image">
                                <img src={img2} alt="Web Development" className="skill-icon" />
                            </div>
                            <div className="info">
                                <h3>Machine Learning</h3>
                                <p>Building predictive models and working with data for intelligent solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="edu_container">
                <div className="education-section">
                    <div className="section-title">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5zm0 7l9-5-9-5-9 5 9 5z" />
                            </svg>
                        </div>
                        <h1 className='head'>Education</h1>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item">
                            <span className="timeline-dot"></span>
                            <div className="timeline-content">
                                <div className="degree">Bachelor of Technology in Computer Science</div>
                                <div className="institution">XYZ University, 2018 - 2022</div>
                                <div className="details">
                                    <div className="detail-item">
                                        Period • <span className="highlight">2023 - 2025</span>
                                    </div>
                                    <div className="detail-item">
                                        Percentage • <span className="highlight">91% till 3rd sem</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <span className="timeline-dot"></span>
                            <div className="timeline-content">
                                <div className="degree">Bachelor of Technology in Computer Science</div>
                                <div className="institution">XYZ University, 2018 - 2022</div>
                                <div className="details">
                                    <div className="detail-item">
                                        Period • <span className="highlight">2023 - 2025</span>
                                    </div>
                                    <div className="detail-item">
                                        Percentage • <span className="highlight">91% till 3rd sem</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
