import './Header.css'
import TechnicalResume from '../assets/Technical-Developer.pdf';
import Logo from './Logo';
import MainNav from './MainNav';

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className="extended-container">
                    <div className="top-bar">
                        <Logo />
                        <MainNav />
                        {/* <button><a href="#contact">Get a Free Quote</a></button> */}
                    </div>
                    <div className="header-inner-container">
                        {/* <h1>I Build & Optimize Websites That <span className="blue-text"> Grow Your Business</span></h1> */}
                        <h1><span className="blue-text">Web and Software Developer</span></h1>
                        <h2>I build high-performing, SEO-friendly websites and applications that solve real business problems.</h2>
                        <div className="button-flex">
                            <button><a href="#projects">View My Work</a></button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}