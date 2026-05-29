import { services } from "../data/services";
import './Services.css'

export default function Services() {
    return (
        <section id="services">
            <div className="container">

                <p className="sub-title">What I Do</p>
                <h2>Services That Help Your Business Succeed</h2>
                <p>End-to-end solutions to build, improve, and grow your online presence.</p>
                <ul className="services-list">
                    {services.map((service) => (
                        <li className="service" key={service.title}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-tags">
                                <span>{service.tags.join(" / ")}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}