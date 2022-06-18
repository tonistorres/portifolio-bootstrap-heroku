import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import './Footer.css';

// Explicação: Responsividade com BootStrap Footer 
// https://www.youtube.com/watch?v=5VFlZpgfu48&list=PLR8OzKI52ppXaPGdUUQGOGKeXSGbChIbc&index=4
function Footer() {
    return (
        <div className='container col-12 pt-3 text-light  footer text-center  bg-secondary '>
            <div className='container col-6 col-md-6 d-flex justify-content-around '>
                <FaFacebook size={28} />
                <FaInstagram size={28} />
                <GoMarkGithub size={28} />
                <span className="text-monospace">
                    <a href="https://www.linkedin.com/in/tonistorres/">
                        <FaLinkedin size={28} />
                    </a>
                </span>
            </div>

        </div>
    );
}

export default Footer;