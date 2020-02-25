import React, { useState, useEffect } from "react";

import "./AboutMe.css";
import "../sideLinkPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";
import SideBarNavbar from "../Header/SideBarNavbar";


const AboutMe = () => {

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('tes')
            setExpanded(true)
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const load = expanded ? 'expanded' : '';
    const loadCss = expanded ? 'exppandedCss' : '';


    return (
        <div>
            {/* <!-- About me Page container --> */}
            <div className="side-link-page">
                <p>about me</p>
            </div>

            <div className="about-me-container row d-flex flex-wrap">
                <div className="about-me-info-wrapper col-xs-12 col-md-12 col-lg-6">
                    <div className="about-me-img animated bounceInLeft">
                        <img
                            src={require('../../assets/images/backgrounds/WhatsApp Image 2019-10-07 at 07.07.53.jpeg')}
                            alt="This is me! Hi!" />
                    </div>
                    <div className="about-me-img-details d-flex">
                        <ul className="animated slideInUp col-xs-12 col-md-6 col-lg-6">
                            <li>
                                Email: <a href="#">nicoleta.tuturuga@yahoo.com</a>
                            </li>
                            <li>
                                Phone number: 0741455980 
                            </li>
                        </ul>
                        <ul className="animated slideInUp col-xs-12 col-md-6 col-lg-6">
                            <li>
                                Date of birth: 07.04.1995
                            </li>
                            <li>
                                Adress: Cluj-Napoca, Romania
                            </li>
                        </ul>
                    </div>
                    <div className="about-me-btns animated slideInUp d-flex justify-content-center">
                        <button>CV</button>
                        <button>CONTACT</button>
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
                        and become an expert. I' ll never forget th first time I managed to display an alert with "hello
                        world". The feeling I felt was incredible, it was like I had super powers, it seemed awsome to
                        me
                        that I could create something like that with a little of code. I always liked to learn new
                        things so
                I think about this opportunity as an exciting challenge.</p>

                    <div className="progress-bar-area">
                        <p>HTML</p>
                        <div className="progress-bar">
                            <span className={load}></span>
                        </div>
                        <p>CSS</p>
                        <div className="progress-bar">
                            <span className={loadCss}></span>
                        </div>
                        <p>BOOTSTRAP</p>
                        <div className="progress-bar">
                            <span className={load}></span>
                        </div>
                        <p>JAVASCRIPT</p>
                        <div className="progress-bar">
                            <span className={load}></span>
                        </div>
                        <p>REACT</p>
                        <div className="progress-bar">
                            <span className={load}></span>
                        </div>
                        <p>GIT</p>
                        <div className="progress-bar">
                            <span className={load}></span>
                        </div>
                    </div>
                </div>
                {/* </div> */}

            </div>

            <SideBarNavbar />
        </div>
    )
}

export default AboutMe;