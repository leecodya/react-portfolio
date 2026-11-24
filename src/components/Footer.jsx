import './Footer.css';
import TechnicalResume from '../assets/Technical-Developer.pdf';
import Logo from './Logo';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-flex">
                        <div className="name-col">
                            <Logo />
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
                                <li><a href="https://github.com/leecodya" target="_blank" rel="noopener noreferrer">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/cody-lee-a83629143/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="collab-col">
                            <h3>Interested in working together?</h3>
                            <p>Let's build something great!</p>
                            <button><a href="mailto:lee.codya@gmail.com?subject=New%20Opportunity!" target="_blank" rel="noopener noreferrer">Get In Touch</a></button>
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