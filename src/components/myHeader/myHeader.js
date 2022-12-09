import React from "react";
import "./myHeader.scss";
import MyMenu from "../myMenu/MyMenu";

const MyHeader = () =>  {
    return (
        <div className="my-header">
            <MyMenu />
        </div>
    )
}

export default MyHeader;
