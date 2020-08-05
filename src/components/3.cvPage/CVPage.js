import React from "react";

import "./CVPage.css";
import "../sideLinkPage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import SideBarNavbar from "../Header/SideBarNavbar";
import StickyBtn from "../buttons/StickyBtn";
import Footer from "../footer/Footer";



const CVPage = () => {

    return (

        <div>
            <div className="root-parent-myCV"></div>

            {/* <!-- CV Page container --> */}
            <div className="cv-container">
                <div className="side-link-page">
                    <p>my cv</p>
                </div>
                <div className="my-cv-contact-info d-flex flex-wrap">
                    <p>Nicoleta Tuturuga</p>
                    <div className="d-flex flex-wrap">
                        <p>0741455980/</p>
                        <Link to="/contactPage">
                                nicoleta.tuturuga@yahoo.com
                        </Link>
                    </div>
                </div>
                <p id="head-title">My CV</p>
                <div className="cv-container-wrapper d-flex justify-content-between flex-wrap">
                    <div className="education-container col-xs-12 col-md-12 col-lg-6 animated slideInDown">
                        <p id="head-title">
                            <FontAwesomeIcon icon="graduation-cap"></FontAwesomeIcon> Education
                        </p>
                        <ul className="timeline">
                            <li>
                                <button className="education-toggle" data-toggle="collapse" href="#collapseTimelineFirstBullet"
                                    aria-expanded="false" aria-controls="collapseTimelineFirstBullet">
                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> October 2019 - March 2020
                                    <p className="section-title">Informal School of IT - Advanced Web Module</p>
                                    <div className="collapse" id="collapseTimelineFirstBullet">
                                        <p><span>HTTP: </span> fundamentals about the HTTP protocol: request methods, headers, status code, its stateless functionality</p>
                                        <p><span>Advanced HTML5 and CSS3: </span>advanced techniques on building a responsive and user-friendly interface</p>
                                        <p><span>Advanced Javascipt: </span>from basic topics like variables, primitives, arrays, objects, conditional statements, and functions to advanced topics such as DOM manipulation, scope, hoisting, OOP concepts, constructors, prototype, AJAX, fetch API and promises.</p>
                                        <p><span>ES6: </span> let and const, scoping concepts, arrow functions, getters and setters, template strings, destructuring, array methods(forEach, map, filter, reduce, every), async/await.</p>
                                        <p><span>OOP: </span> basics about OOP and javascript's syntactic sugar classes, inheritance in javascript and objects, prototype and prototype chain.</p>
                                        <p><span>React: </span> main concepts about React, props and state, functional based components and class based components.</p>
                                        <p><span>GIT: </span> principles and basic commands about creating repositories, branches.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="education-toggle" data-toggle="collapse" href="#collapseTimelineSecondBullet"
                                    aria-expanded="false" aria-controls="collapseTimelineSecondBullet">
                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> January 2020 - Present
                                    <p className="section-title">Iquest - Web development remote learning course</p>
                                    <div className="collapse" id="collapseTimelineSecondBullet">
                                        <p>HTML, CSS and JAVASCRIPT topics, learnt basic GIT and advanced GIT, working with API and servers, creating real responsive sites.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="education-toggle" data-toggle="collapse" href="#collapseTimelineThirdBullet"
                                    aria-expanded="false" aria-controls="collapseTimelineThirdBullet">
                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> October 2014 - July 2018
                                    <p className="section-title">Law School - Babes Bolyai University, Cluj-Napoca</p>
                                    <div className="collapse" id="collapseTimelineThirdBullet">
                                        <p>Bachelor's Degree: Law School, University of Babes-Bolyai, Cluj-Napoca</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="experience-container col-xs-12 col-md-12 col-lg-5 animated slideInUp">
                        <p id="head-title">
                            <FontAwesomeIcon icon="folder-open"></FontAwesomeIcon>Work Experience
                        </p>
                        <div>
                            <p>
                              <span className="section-title">Iquest Group</span> - july 2020 - Front-end intern
                            </p>
                            <p>
                            <span className="section-title">Arobs Software</span> - february-march 2020 - QA Automation intern
                            </p>
                        </div>
                        <div>
                            <p id="head-title">
                                <FontAwesomeIcon icon="globe-americas"></FontAwesomeIcon> Languages
                            </p>
                            <ul>
                                <li>
                                    <p>English - Advanced</p>
                                </li>
                                <li>
                                    <p>German - Basic</p>
                                </li>
                                <li>
                                    <p>Spanish - Basic</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p id="head-title">Skills</p>
                            <ul>
                                <li>
                                    Organized
                                </li>
                                <li>
                                    Atention to details
                                </li>
                                <li>
                                    Adaptability
                                </li>
                                <li>
                                    Capability of working well under pressure
                                </li>
                                <li>
                                    Good team-worker
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="programming-skills">
                    <p id="head-title">Programming Skills</p>
                    <ul className="d-flex justify-content-between flex-wrap">
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="mobile-alt" className="icon animated flipInY"></FontAwesomeIcon> <span>Responsive Theme</span>
                                <p>Ability to make responsive themes for the web. Using mobile first approach, media queries and external libraries when needed.
                                </p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="paint-brush" className="icon animated flipInY"></FontAwesomeIcon> <span>Design</span>
                                <p>Passionate about styling websites, constructing and designing them from scratch.
                                </p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="globe" className="icon animated flipInY"></FontAwesomeIcon> <span>Web Development</span>
                                <p>Ability to combine HTML, CSS and JAVASCRIPT and create great user-friendly interfaces.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul className="d-flex justify-content-between flex-wrap">
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="check-circle" className="icon animated flipInY"></FontAwesomeIcon> <span>Bootstrap Support</span>
                                <p>Capabilities of using external libraries which are great for styling support, like bootstrap.
                                </p>
                            </div>
                        </li>

                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="heart" className="icon animated flipInY"></FontAwesomeIcon> <span>Dynamic Content</span>
                                <p>Advanced skills for making dynamic content for web pages, interactive and easy to use.
                                </p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="award" className="icon animated flipInY"></FontAwesomeIcon> <span>Premium Work</span>
                                <p>Clean and organized code. Doing everything with passion gives the advantage of a well-done work. The principle is make it work, make it better, make it faster.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <StickyBtn />

                <SideBarNavbar />

            </div>

            <Footer />
            
        </div>
    )
}

export default CVPage;