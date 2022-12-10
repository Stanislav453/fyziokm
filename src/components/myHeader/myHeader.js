import React from "react";
import "./myHeader.scss";
import MyMenu from "../MyMenu/MyMenu";

const MyHeader = () =>  {
    return (
        <div className="my-header">
            <MyMenu />
            <div className="baner-container">
                <div className="banner">
                    <h3>Zariadenie funguje na priamu platbu, nie na poisťovňu.</h3>
                </div>
            </div>
        </div>
    )
}

export default MyHeader;
