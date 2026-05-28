import './About.css';
import professionalPhoto from '../assets/Professional-Shot.jpg';
//import collaboratorIcon from '../assets/collaborator-icon.png';
//import experienceIcon from '../assets/experience-icon.png';
//import projectsIcon from '../assets/project-icon.png';
//import wordPressIcon from '../assets/wordpress-icon.png';

export default function About() {
    return (
        <section className='about-me' id="about">
            <div className="container">
                <div className="about-flex">
                    <div className="image-container">
                        <img src={professionalPhoto} alt="Professional Photo" className="profile-pic" />
                    </div>
                    <div className="about-content">
                        <p className="sub-title">About Me</p>
                        <h2>Hi, I'm Cody Lee</h2>
                        <p>I'm a freelance web developer with over 8 years of experience creating fast, responsive, accessible websites that help businesses grow. I specialize in building, improving, and optimizing sites - including AI-generated websites - so they can perform better and rank higher.</p>
                        {
                            /** Commenting this out for now
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
                                <span>Front-End & WordPress Developer</span>
                            </li>
                            <li className="accomplishment">
                                <img src={collaboratorIcon} alt="Collaborator Icon" />
                                <span>Problem Solver & Collaborator</span>
                            </li>
                        </ul>
                             */
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}