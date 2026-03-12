import './Contact.css'

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <h2>Contact Me</h2>
                <h3>Interested in working together?</h3>
                <p>I'm always open to discussing new projects, collaborations, or opportunities!</p>
                <ul className="contact-list">
                    <li>
                        <a href="mailto:lee.codya@gmail.com?subject=Let's%20Work%20Together!">lee.codya@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://www.fiverr.com/s/NNjvrzo" target="_blank" rel="noopener">Fiverr Profile</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}