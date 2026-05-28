import './Contact.css'

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <p className="sub-title">Get In Touch</p>
                <h2>Let's Build Something Great</h2>
                <p>Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours. I'm always open to discussing new projects, collaborations, or opportunities!</p>
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