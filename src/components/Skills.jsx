import './Skills.css';

export default function Skills() {
    return (
        <section className="skills-section">
            <div className="container">
                <h2>Skills</h2>
                <ul className='skills-flex'>
                    <li className="skills-category">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>C#</li>
                            <li>Java</li>
                        </ul>
                    </li>
                    <li className="skills-category">
                        <h3>Frameworks & Tools</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>Git</li>
                            <li>WordPress</li>
                            <li>WooCommerce</li>
                        </ul>
                    </li>
                    <li className="skills-category">
                        <h3>Development Practices</h3>
                        <ul>
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>Unit Testing</li>
                            <li>Agile Development</li>
                            <li>Scrum</li>
                            <li>API Integration</li>
                            <li>Debugging</li>
                            <li>Technical Documentation</li>
                            <li>Responsive Development</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}