import "./Sluzby.scss";
import data from "./data";
import React, {useState} from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Sluzby = () => {

    const [ selected, setSelected ] = useState(null);
    const [ arraySelected, setArraySelected ] = useState(null);

    const arrayToggle = (i) => {

        setArraySelected(i)
    }

    const paragraphToggle = (i) => {
        if( selected === i ) {
            return   setSelected(null)
        }

        setSelected(i)

    }

    return (
        <div className="sluzby">
            <header className="text-header">
                <h2 id="sluzby" >Služby</h2>
                <div className="underline"></div>
            </header>
            <div className="sluzby-content">
                    {
                        data.map( (item, key_one ) => {
                            const { title, list } = item
                            return (
                                <div className="content-box" onClick={ () => arrayToggle(key_one) }>
                                    <h3 className="content-box-hight" key={key_one}>{title}</h3>
                                    <div className="content-box-desc">
                                        {
                                            list.map( (item, key_two) => {
                                                const { under_title, desc } = item
                                                return(
                                                    
                                                <article className="article-box">
                                                    <header className={selected == key_two && arraySelected == key_one ? "article-header article-header-active" : "article-header"} key={key_two} onClick={ () => paragraphToggle(key_two)  }>
                                                        <h4>{under_title}</h4>
                                                        <FaArrowAltCircleDown className={ selected == key_two && arraySelected == key_one ? "arrow-icon rotate" : "arrow-icon" } />
                                                    </header>
                                                        <p className={ selected == key_two && arraySelected == key_one ? "content-box-desc show" : "content-box-desc" } >{desc}</p>
                                                </article>)
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Sluzby