import React from "react";
import { data } from "./nav_data";
import { FaInstagram, FaFacebook  } from "react-icons/fa"
import logo from "./logo.svg"
import "./MyMenu.scss";

const myMenu = () => {
    return (
        <nav className="navigation">
            <div className="icons">
                <a href="https://www.instagram.com/michaleckristian/"><FaInstagram /></a>
                <a href="https://www.facebook.com/kristian.michalec"><FaFacebook /></a>
            </div>
            <ul className="link-list">
            {
                data.map( (item,key) => {
                    return(
                       <li key={key}>
                            <a href={item.link}>{item.name}</a>
                       </li>
                    )
                })
            }
            <a href="#"><img src={logo} alt="logo" width="30" height="30" className="logo" /></a>
            </ul>
        </nav>
    );
};

export default myMenu
