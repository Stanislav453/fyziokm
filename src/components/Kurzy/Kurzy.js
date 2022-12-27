import React, { useState } from "react";
import "./Kurzy.scss";
import { FaLeanpub, FaReadme } from "react-icons/fa";
import data from "./data";

const Kurzy = () => {

    const [ toggle, setToggle ] = useState(0);

    const myToggle = (i) =>  {

        if ( toggle === i ) {
           return setToggle(null)
        }

        setToggle(i)

    }

    return(
        <div className="kurzy">
            <header className="text-header">
                <h2 id="kurzy" >Kurzy</h2>
                <div className="underline"></div>
            </header>
            {
                data.map( (item, key)=> {
                    const { year, list } = item

                    return (
                        <div className="my-wraper" key={key} >
                            <div className="content-line">
                                <FaLeanpub className="svg-icon" />
                                <div className="line"></div>
                            </div>
                            <div className="content">
                                <h4 key={key} onClick={ () => { myToggle(key) } } >{year}</h4>
                                <ul className={ toggle == key ? "show" : "" }>
                                    { 
                                        list.map( (item, key) => {
                                            const { title, desc } = item
                                            return (
                                                <li key={key} > <strong>{title}</strong> {desc}</li>
                                            )
                                        } )
                                    }
                                </ul>
                            </div> 
                        </div>
                        
                    )
                } )
            }
        </div>
    )
}

export default Kurzy