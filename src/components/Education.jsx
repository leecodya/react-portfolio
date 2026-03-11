import './Education.css'

export default function Education() {
    return (
        <section className="education-section">
            <div className="container">
                <h2>Education</h2>
                <ul className="education-list">
                    <li className="education">
                        <h3>Master's in Appied Computer Science</h3>
                        <h4>University of West Georgia</h4>
                        <time>August 2019 - July 2022</time>
                    </li>
                    <li className="education">
                        <h3>Bachelor's in Information Technology</h3>
                        <h4>Middle Georgia State University</h4>
                        <time>August 2014 - Dec 2017</time>
                    </li>
                </ul>
            </div>
        </section>
    )
}