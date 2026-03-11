import './About.css';
import professionalPhoto from '../assets/Professional-Shot.jpg';
import collaboratorIcon from '../assets/collaborator-icon.png';
import experienceIcon from '../assets/experience-icon.png';
import projectsIcon from '../assets/project-icon.png';
import wordPressIcon from '../assets/wordpress-icon.png';

export default function About() {
    return (
        <section className='about-me'>
            <div className="container">
                <div className="about-flex">
                    <div className="image-container">
                        <img src={professionalPhoto} alt="Professional Photo" className="profile-pic" />
                    </div>
                    <div className="about-content">
                        <h2>About Me</h2>
                        <p>I'm a web developer based in Georgia with a passion for crafting pixel perfect, responsive, and accessible websites. My background in both front-end development and back-end logic helps me bridge the gap between aesthetics and performance. I love turning complex ideas into clean, user-center experiences. I maintain a continuous desire for professional development and advancement within my field.</p>
                        <ul className="accomplishments">
                            <li className="accomplishment">
                                <img src={experienceIcon} alt="Experience Icon" />
                                <span>8+ Years of Experience</span>
                            </li>
                            <li className="accomplishment">
                                <img src={projectsIcon} alt="Projects Icon" />
                                <span>15+ Projects Completed</span>
                            </li>
                            <li className="accomplishment">
                                <img src={wordPressIcon} alt="WordPress Icon" />
                                <span>Front-End and WordPress Developer</span>
                            </li>
                            <li className="accomplishment">
                                <img src={collaboratorIcon} alt="Collaborator Icon" />
                                <span>Problem Solver & Collaborator</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}