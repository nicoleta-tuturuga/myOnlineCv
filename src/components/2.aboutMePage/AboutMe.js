import React, { useState, useEffect } from "react";

import "./AboutMe.css";
import "../sideLinkPage.css";

import { Link } from "react-router-dom";
import SideBarNavbar from "../Header/SideBarNavbar";
import StickyBtn from "../buttons/StickyBtn";


const AboutMe = () => {

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true)
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const loadHtml = expanded ? 'expandedHtml' : '';
    const loadCss = expanded ? 'exppandedCss' : '';
    const loadBootstrap = expanded ? 'expandedBootstrap' : '';
    const loadJs = expanded ? 'expandedJs' : '';
    const loadReact = expanded ? 'expandedReact' : '';
    const loadGit = expanded ? 'expandedGit' : '';


    return (
        <div>
            {/* <!-- About me Page container --> */}
            <div className="side-link-page">
                <p>about me</p>
            </div>

            <div className="about-me-container row d-flex flex-wrap">
                <div className="about-me-info-wrapper col-xs-12 col-md-12 col-lg-6">
                    <a href="#">
                        <div className="about-me-img animated bounceInLeft heartBeat">
                            <img
                                src={require('../../assets/images/backgrounds/WhatsApp Image 2019-10-07 at 07.07.53.jpeg')}
                                alt="This is me! Hi!" />
                                <Link to="/myCV">
                                    <a href="#">
                                        <button className="custom-styled-btn">Download CV</button>
                                    </a>
                                </Link>
                        </div>
                    </a>
                    <div className="about-me-img-details d-flex">
                        <ul className="animated rotateInDownLeft col-xs-12 col-md-6 col-lg-6">
                            <li>
                                Email: <a href="#">nicoleta.tuturuga@yahoo.com</a>
                            </li>
                            <li>
                                Phone number: 0741455980 
                            </li>
                        </ul>
                        <ul className="animated rotateInDownLeft col-xs-12 col-md-6 col-lg-6">
                            <li>
                                Date of birth: 07.04.1995
                            </li>
                            <li>
                                Adress: Cluj-Napoca, Romania
                            </li>
                        </ul>
                    </div>
                    <div className="about-me-btns animated zoomInUp d-flex justify-content-center">
                    <Link to="/myCV">
                        <button className="custom-styled-btn">CV</button>
                    </Link>
                        <Link to="/contactPage">
                            <button className="custom-styled-btn">CONTACT</button>
                        </Link>
                    </div>
                </div>

                <div className="about-me-description animated bounceInRight 
                col-xs-12 col-md-12 col-lg-6">
                    <p id="head-title">About Me</p>
                    <p> Hi! My name is Nicoleta Tuturuga and I am passionate about programming. I studied law at UBB law
                        school
                        from Cluj-Napoca and I graduated last year. Ever since I graduated I wanted to try an old dream
                        of
                        mine, which is programming and computer science. I was always passionate about technology and
                        curious about this topics so I decided to dive right into them, wishing to explore this new
                        field
                        and become an expert. I' ll never forget the time I managed to display my first "hello
                        world" alert. The feeling was incredible and it was like I had super powers, which made me very curious and motivated me to study more about this new field.
                         I always liked to learn new
                        things so I think about this opportunity as an exciting challenge.</p>

                    <div className="progress-bar-area">
                        <p>HTML</p>
                        <div className="progress-bar">
                            <span className={loadHtml}></span>
                        </div>
                        <p>CSS</p>
                        <div className="progress-bar">
                            <span className={loadCss}></span>
                        </div>
                        <p>BOOTSTRAP</p>
                        <div className="progress-bar">
                            <span className={loadBootstrap}></span>
                        </div>
                        <p>JAVASCRIPT</p>
                        <div className="progress-bar">
                            <span className={loadJs}></span>
                        </div>
                        <p>REACT</p>
                        <div className="progress-bar">
                            <span className={loadReact}></span>
                        </div>
                        <p>GIT</p>
                        <div className="progress-bar">
                            <span className={loadGit}></span>
                        </div>
                    </div>
                </div>

            </div>

            <StickyBtn />

            <SideBarNavbar />

        </div>
    )
}

export default AboutMe;