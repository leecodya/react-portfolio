import projectsIcon from '../assets/project-icon.png';
import './Logo.css';

export default function Logo() {
    return (
        <div className='logo-container'>
            <img src={projectsIcon} alt="Project Icon" />
            <div className="content">
                <h2>Cody Lee</h2>
                <p>Web Developer</p>
            </div>
        </div>
    )
}