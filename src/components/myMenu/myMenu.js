import React,{ useState }from "react";
import { data } from "./nav_data";
import { FaInstagram, FaFacebook, FaBars, FaBan  } from "react-icons/fa"
import logo from "../../logo.svg"
import "./MyMenu.scss";

const MyMenu = () => {

    const [ clicked, setClicked ] = useState(true)

    const  onlyClick = () => {
       setClicked( !clicked )

    }

    return (
    <div className="container-nav">
        <nav className="navigation">
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
                            <a onClick={ () => { setClicked(true) } }  href={item.link}>{item.name}</a>
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
