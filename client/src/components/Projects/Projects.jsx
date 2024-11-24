import React, { useState, useEffect } from 'react';
import img2 from '../../assets/img1.png'
import img1 from '../../assets/img2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "../Projects/Projects.css"
import { faArrowUpRightFromSquare, faEllipsis, faInfo, faVideo } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openModal = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = ''; // Allow background scroll again
    };

    const projects = [
        {
            title: 'CodeBro',
            description: 'This Coding Problem-Solving Platform is a full-stack website where users can practice coding in JavaScript, Python, or Java.',
            image: img2,
        },
        {
            title: 'SpaceX - Animated',
            description: 'Fully responsive SpaceX website using HTML, CSS, JS, GSAP, and Locomotive. GSAP, and Locomotive. ',
            image: img2,
        },
        {
            title: 'SpaceX - Animated',
            description: 'Fully responsive SpaceX website using HTML, CSS, JS, GSAP, and Locomotive.',
            image: img2,
        },
        {
            title: 'SpaceX - Animated',
            description: 'Fully responsive SpaceX website using HTML, CSS, JS, GSAP, and Locomotive.',
            image: img2,
        },
        {
            title: 'SpaceX - Animated',
            description: 'Fully responsive SpaceX website using HTML, CSS, JS, GSAP, and Locomotive.',
            image: img2,
        },


    ];

    const slides = [img2, img1, img2];


    const showSlide = (index) => {
        const slideIndex = (index + slides.length) % slides.length;
        setCurrentSlide(slideIndex);
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);
    const goToSlide = (index) => showSlide(index);

    const handleKeyDown = (e) => {
        if (!isModalOpen) return;

        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    };

    // Touch swipe functionality
    useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            if (touchEndX < touchStartX) {
                nextSlide();
            } else if (touchEndX > touchStartX) {
                prevSlide();
            }
        };

        const sliderContent = document.querySelector('.slider-content');

        if (sliderContent) {
            sliderContent.addEventListener('touchstart', handleTouchStart, false);
            sliderContent.addEventListener('touchend', handleTouchEnd, false);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (sliderContent) {
                sliderContent.removeEventListener('touchstart', handleTouchStart);
                sliderContent.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [isModalOpen]); // Only run this effect when the modal is open

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]); // Only listen for keydown events when the modal is open

    return (
        <>
            <div className="container">
                <div className="title-section">
                    <h1 className="title">Project</h1>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={`${project.title} Interface`} />
                                <div className="image-overlay" onClick={openModal}>
                                    <div className="overlay-content">
                                        <svg className="view-more-icon" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span className="view-more-text">View More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <div className="project-actions">
                                    <button className="action-button">
                                        <FontAwesomeIcon className='media_icon' icon={faArrowUpRightFromSquare} />
                                    </button>
                                    <button className="action-button">
                                    <FontAwesomeIcon className='media_icon' icon={faGithub} />
                                    </button>
                                    <button className="action-button">
                                    <FontAwesomeIcon className='media_icon' icon={faVideo} />
                                    </button>
                                    <button className="action-button">
                                    <FontAwesomeIcon className='media_icon' icon={faEllipsis} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal active" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <h2 className="modal-title">CodeBro</h2>

                        {/* Slider */}
                        <div className="slider">
                            <div className="slider-content">
                                {slides.map((slide, index) => (
                                    <div className={`slide ${currentSlide === index ? 'active' : ''}`} key={index}>
                                        <img src={slide} alt={`CodeBro Screenshot ${index + 1}`} />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation for Slider */}
                            <div className="slider-nav">
                                <button className="slider-arrow" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>‹</button>
                                <button className="slider-arrow" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>›</button>
                            </div>

                            {/* Slider Dots */}
                            <div className="slider-dots">
                                {slides.map((_, index) => (
                                    <span
                                        className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                                        onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                                        key={index}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects