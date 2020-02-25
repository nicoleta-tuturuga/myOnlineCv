import React from "react";

import "./SideBarNavbar.css";

import { Link } from "react-router-dom";


const SideBarNavbar = () => {

    return (
        <div>
            <div className="side-bar-nav-container">
                <ul>
                    <li className="side-nav-links">
                        <Link className="bullet" to='/'></Link>
                        <div className="side-nav-link">HOME</div>
                    </li>
                    <li className="side-nav-links">
                        <Link className="bullet" to='/about'></Link>
                        <div className="side-nav-link">ABOUT</div>
                    </li>
                    <li className="side-nav-links">
                        <Link className="bullet" to='/myCV'></Link>
                        <div className="side-nav-link">CV</div>
                    </li>
                    <li className="side-nav-links">
                        <Link className="bullet" to='/projects'></Link>
                        <div className="side-nav-link">PORTOFOLIO</div>
                    </li>
                    <li className="side-nav-links">
                        <Link className="bullet" to='/hobbies'></Link>
                        <div className="side-nav-link">HOBBIES</div>
                    </li>
                    <li className="side-nav-links">
                        <Link className="bullet" to='/contactPage'></Link>
                        <div className="side-nav-link">CONTACT</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarNavbar;