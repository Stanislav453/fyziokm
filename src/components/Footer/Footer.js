import "./Footer.scss";
import logo from "../../logo.svg";

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.fyziokm.sk"> <img src={logo} alt="logo" /> </a>
        </div>
    )
}

export default Footer;