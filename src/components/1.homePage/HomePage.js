import React from "react";

import "./HomePage.css";
import "../sideLinkPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

import SideBarNavbar from "../Header/SideBarNavbar";



const HomePage = () => {

    return (
        <div className="parent">

            {/* <!-- SVG animated birds --> */}
            <div className="bird-container">
                <div className="bird bird--one"></div>
            </div>

            {/* <!-- Home Page container --> */}
            <div className="img-container">
                <div className="side-link-page">
                    <p>home</p>
                </div>

                <div className="main-presentation">
                    <p id="head-title">Hello, I'm Nicoleta</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam explicabo modi voluptatem rem
                        voluptas ratione impedit.
                    </p>

                    {/* <!-- Social network icons --> */}
                    <div className="widget-wrap-social-networks">
                        <ul className="social-networks">
                            <li>
                                <a href="https://www.instagram.com/nicotuturuga/?igshid=19603gdl5y8a0&fbclid=IwAR2ilC241XTONY6kJr3a2XzwEyorZI-x8CdL7uQzFFudpa7Ngy9YRp1VuFk"
                                    title="Instagram" target="blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <SideBarNavbar></SideBarNavbar>

                <div className="arrow-wrap animated slideInDown">
                    <a>
                        <FontAwesomeIcon icon="angle-double-down"></FontAwesomeIcon>
                    </a>
                </div>

                {/* <div className="arrow-wrap">
                    <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                         <a>
                            <FontAwesomeIcon icon="angle-double-down"></FontAwesomeIcon>
                        </a>
                    </Animated>
                </div> */}

            </div>
        </div>

    )
}

export default HomePage;