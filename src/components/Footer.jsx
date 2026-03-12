import './Footer.css';
import projectsIcon from '../assets/project-icon.png';
import TechnicalResume from '../assets/Technical-Developer.pdf';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-flex">
                        <div className="name-col">
                            <img src={projectsIcon} alt="Project Icon" />
                            <h2>Cody Lee</h2>
                            <p>Web Developer & Software Engineer</p>
                        </div>
                        <div className="nav-col">
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#skills">Skills</a></li>
                            </ul>
                        </div>
                        <div className="quick-links-col">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href={TechnicalResume} download>Resume Download</a></li>
                                <li><a href="https://github.com/leecodya" target="_blank" rel="noopener noreferrer">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/cody-lee-a83629143/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="collab-col">
                            <h3>Interested in working together?</h3>
                            <p>Let's build something great. Get in touch!</p>
                            <button><a href="https://www.fiverr.com/s/NNjvrzo" target="_blank" rel="noopener noreferrer">Hire Me</a></button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p><small>&copy; 2026 by Cody Lee. All rights reserved.</small></p>
            </div>
        </>
    )
}