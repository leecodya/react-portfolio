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
                        <button><a href="#contact">Get a Free Quote</a></button>
                    </div>
                    <div className="header-inner-container">
                        <h1>I Build & Optimize Websites That <span className="blue-text"> Grow Your Business</span></h1>
                        <h2>I build high-performing, SEO-friendly websites and optimize AI-generated code so your site is fast, clean, and built to rank.</h2>
                        <div className="button-flex">
                            <button><a href="#contact">Get a Free Website Audit</a></button>
                            <button><a href="#projects">View My Work</a></button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}