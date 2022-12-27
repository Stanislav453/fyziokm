import "./Kontakt.scss";
import { FaEnvelope, FaHome, FaParking, FaPhoneSquareAlt } from "react-icons/fa";

const Kontakt = () => {
    return ( 
        <div className="kontakt">
            <header className="text-header">
                <h2 id="kontakt" >Kontakt</h2>
                <div className="underline"></div>
            </header>
            <div className="kontakt-container">
                <div className="kontakt-one">
                <ul >
                    <li><FaParking className="kontakt-icons" /> Parkovanie je možné na mieste (vedľa v uličke, pred domom)</li>
                    <li><FaHome className="kontakt-icons" /> 023 02 Krásno nad Kysucou, Kalinovská 1202 (rodinný dom)</li>
                    <li><FaEnvelope className="kontakt-icons" /> <a href="mailto:kristian.michalec1111@gmail.com">kristian.michalec1111@gmail.com</a></li>
                    <li><FaPhoneSquareAlt className="kontakt-icons" /><a href="tel:+421918239799">+421918239799</a></li>
                </ul>
                <div className="kontakt-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.845399952852!2d18.86108953398711!3d49.39291640481189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471441e3fda878cd%3A0xd574016c2db81df7!2sFYZIO%20KM!5e0!3m2!1ssk!2ssk!4v1658759153243!5m2!1ssk!2ssk" width="300" height="250" style={{border: "none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className="kontakt-two">
                </div>
            </div>
        </div>

    )

}

export default Kontakt