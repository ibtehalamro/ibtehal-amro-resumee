import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Header = ({ refs}) => {

    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        console.log("toggle", toggle)
        setToggle(!toggle)

    }
    function scrollfun(articleRef) {


        articleRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <header className="bottom-header" id="header">

            <nav className="nav bodySize">

                <Link to={"#"} className="nav__logo">
                    Ibtehal Amro
                </Link>

                <div className={(toggle === true ? "show-menu" : "") + " nav__menu"} id="nav-menu">

                    <ul className={"nav__list"}>

                        <li onClick={() => scrollfun(refs[0])} className={"nav__item"}>
                            <Link to={"#home"} onClick={toggleMenu} className={"nav__link"}>
                                Home
                            </Link>
                        </li>
                        <li onClick={() => scrollfun(refs[1])} className={"nav__item"}>
                            <Link to={"#profile"} onClick={toggleMenu} className={"nav__link"}>
                                Career Objectives
                            </Link>
                        </li>
                        <li onClick={() => scrollfun(refs[2])} className={"nav__item"}>
                            <Link to={"#education"} onClick={toggleMenu} className={"nav__link"}>
                                Graduation Project </Link>
                        </li>
                        <li onClick={() => scrollfun(refs[3])} className={"nav__item"}>
                            <Link to={"#experince"} onClick={toggleMenu} className={"nav__link"}>
                                Education
                            </Link>
                        </li>
                        <li onClick={() => scrollfun(refs[4])} className={"nav__item"}>
                            <Link to={"#experince"} onClick={toggleMenu} className={"nav__link"}>
                                Technical Skills
                            </Link>
                        </li>
                        <li onClick={() => scrollfun(refs[5])} className={"nav__item"}>
                            <Link to={"#experince"} onClick={toggleMenu} className={"nav__link"}>
                                Soft Skills
                            </Link>
                        </li>
                        <li onClick={() => scrollfun(refs[6])} className={"nav__item"}>
                            <Link to={"#experince"} onClick={toggleMenu} className={"nav__link"}>
                                Languages
                            </Link>
                        </li>

                    </ul>
                </div>


                <div className={"nav__toggle "} id={"nav-toggle"}>
                    <Link onClick={toggleMenu} to={""}> </Link>
                </div>


            </nav>


        </header>
    );
};

export default Header;