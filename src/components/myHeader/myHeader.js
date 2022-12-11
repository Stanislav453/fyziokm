import React from "react";
import "./myHeader.scss";
import MyMenu from "../MyMenu/MyMenu";
import logo from "../../logo.svg"
import { FaPhoneAlt,FaHome, FaEnvelope,FaMapMarkerAlt   } from "react-icons/fa";

const MyHeader = () =>  {
    return (
        <div className="my-header">
            <MyMenu />
            <div className="baner-container">
                <div className="banner">
                    <h3>Zariadenie funguje na priamu platbu, nie na poisťovňu.</h3>
                </div>
                <div className="info-baner">
                    <img src={logo} width="250" height="250" alt="logo" className="header-logo" />
                    <h4>NEŠTÁTNE ZDRAVOTNÍCKE ZARIADENIE</h4>
                    <div className="name-contact">
                        <h1>Mgr. Kristián Michalec</h1>
                        <div className="contact-container">
                            <ul>
                                <li><FaMapMarkerAlt className="my-icon" />023 02 Krásno nad Kysucou, Kalinovská 1202 (rodinný dom)</li>
                                <li><a href="mailto:kristian.michalec1111@gmail.com"><FaEnvelope className="my-icon"/>kristian.michalec1111@gmail.com</a></li>
                                <li><a href="tel:+421918239799"><FaPhoneAlt className="my-icon" />+421918239799</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyHeader;
