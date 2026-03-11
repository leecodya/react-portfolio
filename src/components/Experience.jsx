import './Experience.css';

export default function Experience() {
    return (
        <section className="experience-section">
            <div className="container">
                <h2>Experience</h2>
                <ul className="experience-list">
                    <li className="experience">
                        <header className="exp-header">
                            <h3>M&R Marketing</h3>
                            <time>Oct 2022 - May 2025</time>
                        </header>
                        <div className="exp-body">
                            <h4>Web Developer</h4>
                            <ul>
                                <li>Developed responsive client websites using HTML, CSS, JavaScript, and WordPress, ensuring cross-browser compatibility and performance optimization.</li>
                                <li>Implemented SEO best practices, analytics tracking, and conversion monitoring using Google Analytics and Google Tag Manager.</li>
                                <li>Integrated plugins, APIs, and custom functionality to extend website capabilities and meet client requirements.</li>
                                <li>Collaborated with marketing and design teams to translate creative concepts into fully functional websites.</li>
                                <li>Researched and implemented modern web development techniques to support complex features and improve site usability.</li>
                            </ul>
                        </div>
                    </li>
                    <li className="experience">
                        <header className="exp-header">
                            <h3>Georgia Farm Bureau</h3>
                            <time>May 2019 - Oct 2022</time>
                        </header>
                        <div className="exp-body">
                            <h4>PT Programmer I</h4>
                            <ul>
                                <li>Developed and maintained enterprise applications supporting multiple internal business units.</li>
                                <li>Implemented new application features and enhancements using object-oriented programming principles.</li>
                                <li>Designed and executed unit tests to validate system functionality and maintain software reliability.</li>
                                <li>Produced technical documentation and user guides for new and updated systems.</li>
                                <li>Maintained version control and adhered to established development lifecycle and deployment procedures.</li>
                            </ul>
                        </div>
                    </li>
                    <li className="experience">
                        <header className="exp-header">
                            <h3>Silvervine Software</h3>
                            <time>Feb 2018 - Apr 2019</time>
                        </header>
                        <div className="exp-body">
                            <h4>Software Developer</h4>
                            <ul>
                                <li>Maintained and improved the performance of the existing software.</li>
                                <li>Troubleshoot, test and maintain software products to ensure system integrity. </li>
                                <li>Recommended improvements to existing software programs as necessary. </li>
                                <li>Timely resolution of issues and maintain thorough documentation of all software solutions.</li>
                            </ul>
                        </div>
                    </li>
                    <li className="experience">
                        <header className="exp-header">
                            <h3>Wayne Reaves Software & Websites</h3>
                            <time>May 2017 - Feb 2018</time>
                        </header>
                        <div className="exp-body">
                            <h4>Web Support Specialist</h4>
                            <ul>
                                <li>Supported Web-based products and services through email, desktop, & telephone support. </li>
                                <li>Interacted with customers and troubleshoot problems to provide a high level of customer satisfaction.</li>
                                <li>Trained customers on the proper use and functionality of their new custom-built website</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}