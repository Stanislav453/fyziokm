import { useState } from "react";
import "./ScrollTop.scss";
import { Link } from "react-scroll";
import { FaHome} from "react-icons/fa";

const ScrollTop = () => {

    const [ myShow, setMyShow ] = useState( false )

    const scrollValue = () => {
        if( window.scrollY > 500 ) {
            setMyShow(true)
        } else {
            setMyShow(false)
        }
    }

    window.addEventListener("scroll", scrollValue)

    return ( 
        <Link className={ myShow ?  "scroll-icon" :"scroll-icon hide"  } to="home" spy={true} smooth={true} duration={500}> <FaHome /> </Link>
     )
}

export default ScrollTop