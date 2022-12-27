import React,{ useState }from "react";
import { data } from "./nav_data";
import { FaInstagram, FaFacebook, FaBars, FaBan  } from "react-icons/fa"
import logo from "../../logo.svg"
import "./MyMenu.scss";
import { Link } from "react-scroll";

const MyMenu = () => {

    const [ clicked, setClicked ] = useState(true)

    const  onlyClick = () => {
       setClicked( !clicked )

    }

    return (
    <div className="container-nav">
        <nav id="home" className="navigation">
            <div className="icons">
                <a href="https://www.instagram.com/michaleckristian/"><FaInstagram /></a>
                <a href="https://www.facebook.com/kristian.michalec"><FaFacebook /></a>
            </div>
            <div className="mobile-menu-icon">
               <i className="hamburger" onClick={ () => { onlyClick() } } > { clicked ? <FaBars /> :  <FaBan /> } </i> 
            </div>
            <ul className={clicked ? "link-list" : "link-list active"}>
            {
                data.map( (item,key) => {
                    return(
                       <li  key={key}>
                            <Link onClick={ () => { setClicked(true) } } style={{ cursor:"pointer" }}  to={item.id} spy={true} smooth={true} duration={500} > {item.name} </Link>
                       </li>
                    )
                })
            }
            <a href="#"><img src={logo} alt="logo" width="30" height="30" className="logo" /></a>
            </ul>
        </nav>
    </div>
    );
};

export default MyMenu
