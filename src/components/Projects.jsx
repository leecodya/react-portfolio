import './Projects.css';
import WoodlandsImage from '../assets/woodlands.png';
import MWAImage from '../assets/mwa.png';
import HHNTImage from '../assets/hhnt.png';
import JonesGlassImage from '../assets/jonesglass.png';
import OverheadDoorImage from '../assets/overheaddoor.png';
import ElliottMachineShopImage from '../assets/elliottmachineshop.png';

export default function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h2>Projects</h2>
                <p>Discover the diverse range of projects I have successfully completed throughout my professional journey. These featured projects reflect my expertise and dedication to delivering exceptional results in every endeavor.</p>
                <ul className="projects-list">
                    <li className="project">
                        <a href="https://woodlandscoffeeroasters.com/"  target="_blank" rel="noopener">
                            <div className="project-image-container">
                                <img src={WoodlandsImage} alt="Woodland's Coffee Roasters" />
                            </div>
                            <span className="link-text">Woodland's Coffee Roaster's & Cafe</span>
                        </a>
                    </li>
                    <li className="project">
                        <a href="https://maconwater.org/"  target="_blank" rel="noopener">
                            <div className="project-image-container">
                                <img src={MWAImage} alt="MWA" />
                            </div>
                            <span className="link-text">Macon Water Authority</span>
                        </a>
                    </li>
                    <li className="project">
                        <a href="https://www.hhnt.com/"  target="_blank" rel="noopener">
                            <div className="project-image-container">
                                <img src={HHNTImage} alt="HHNT" />
                            </div>
                            <span className="link-text">HHNT</span>
                        </a>
                    </li>
                    <li className="project">
                        <a href="https://ohdofmacon.com/"  target="_blank" rel="noopener">
                            <div className="project-image-container">
                                <img src={OverheadDoorImage} alt="Overhead Door Company" />
                            </div>
                            <span className="link-text">Overhead Door Company</span>
                        </a>
                    </li>
                    <li className="project">
                        <a href="https://jonesglassinc.com/" target="_blank" rel="noopener">
                            <div className="project-image-container">
                                <img src={JonesGlassImage} alt="Jones Glass Inc." />
                            </div>
                            <span className="link-text">Jones Glass Inc.</span>
                        </a>
                    </li>
                    <li className="project">
                        <a href="https://www.elliottms.com/"  target="_blank" rel="noopener">
                            <div className="project-image-container">
                                <img src={ElliottMachineShopImage} alt="Elliott Machine Shop" />
                            </div>
                            <span className="link-text">Elliott Machine Shop</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}