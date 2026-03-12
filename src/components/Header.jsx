import './Header.css'
import TechnicalResume from '../assets/Technical-Developer.pdf';

export default function Header() {
    return (
        <>
            <div className="top-bar"></div>
            <header className='header'>
                <div className="extended-container">
                    <h1>Cody Lee</h1>
                    <h2>Web Developer & Software Engineer</h2>
                    <h3>I build fast, user-focused websites and applications that solve real business problems</h3>
                    <div className="button-flex">
                        <button><a href="#projects">View My Work</a></button>
                        <button><a href={TechnicalResume} download>Download Resume</a></button>
                    </div>
                </div>
            </header>
        </>
    )
}