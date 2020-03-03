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
            <div className="root-parent-myCV">
                {/* <img
                    src={require('../../assets/images/backgrounds/photo-1500989145603-8e7ef71d639e.jpg')}
                /> */}
            </div>
            {/* <!-- CV Page container --> */}
            <div class="cv-container">
                <div className="side-link-page">
                    <p>my cv</p>
                </div>
                <div class="my-cv-contact-info d-flex flex-wrap">
                    <p>Nicoleta Tuturuga</p>
                    <div className="d-flex flex-wrap">
                        <p>0741455980/</p>
                        <Link to="/contactPage">
                            <a href="#">
                                nicoleta.tuturuga@yahoo.com
                            </a>
                        </Link>
                    </div>
                </div>
                <p id="head-title">My CV</p>
                <div class="cv-container-wrapper d-flex justify-content-between flex-wrap">
                    <div class="education-container col-xs-12 col-md-12 col-lg-6 animated slideInDown">
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
                                    <p class="section-title">Informal School of IT - Advanced Web Module</p>
                                    <div className="collapse" id="collapseTimelineFirstBullet">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nihil voluptate
                                            cumque
                                            natus numquam excepturi et provident ipsum doloribus corrupti, repellendus eius. Quaerat
                                            voluptatibus amet suscipit possimus error dolorum?</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="education-toggle" data-toggle="collapse" href="#collapseTimelineSecondBullet"
                                    aria-expanded="false" aria-controls="collapseTimelineSecondBullet">
                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> January 2020 - Present
                                    <p class="section-title">Iquest - Web development remote learning course</p>
                                    <div className="collapse" id="collapseTimelineSecondBullet">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nihil voluptate cumque
                                            natus numquam excepturi et provident ipsum doloribus corrupti, repellendus eius. Quaerat
                                            voluptatibus amet suscipit possimus error dolorum?</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="education-toggle" data-toggle="collapse" href="#collapseTimelineThirdBullet"
                                    aria-expanded="false" aria-controls="collapseTimelineThirdBullet">
                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> October 2014 - July 2018
                                    <p class="section-title">Law School - Babes Bolyai University, Cluj-Napoca</p>
                                    <div className="collapse" id="collapseTimelineThirdBullet">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nihil voluptate cumque
                                            natus numquam excepturi et provident ipsum doloribus corrupti, repellendus eius. Quaerat
                                            voluptatibus amet suscipit possimus error dolorum?</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="experience-container col-xs-12 col-md-12 col-lg-5 animated slideInUp">
                        <p id="head-title">
                            <FontAwesomeIcon icon="folder-open"></FontAwesomeIcon> Experience
                        </p>
                        <div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis expedita similique nemo eum
                                dignissimos, obcaecati ipsum sapiente natus provident dolore fugit vel perferendis, sequi
                                voluptatibus assumenda, voluptatum sed asperiores libero.
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
                                    <p>German - basic</p>
                                </li>
                                <li>
                                    <p>Spanish - basic</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p id="head-title">Skills</p>
                        </div>
                    </div>
                </div>

                <div className="programming-skills">
                    <p id="head-title">Programming Skills</p>
                    <ul className="d-flex justify-content-between flex-wrap">
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="mobile-alt" className="icon animated flipInY"></FontAwesomeIcon> <span>Responsive Theme</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Officiis expedita similique nemo eum
                                </p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="paint-brush" className="icon animated flipInY"></FontAwesomeIcon> <span>Design</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                        Officiis expedita similique nemo eum
                                </p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="globe" className="icon animated flipInY"></FontAwesomeIcon> <span>Web Development</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                        Officiis expedita similique nemo eum
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul className="d-flex justify-content-between flex-wrap">
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="check-circle" className="icon animated flipInY"></FontAwesomeIcon> <span>Bootstrap Support</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                        Officiis expedita similique nemo eum
                                </p>
                            </div>
                        </li>

                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="heart" className="icon animated flipInY"></FontAwesomeIcon> <span>Dynamic Content</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                        Officiis expedita similique nemo eum
                                </p>
                            </div>
                        </li>
                        <li className="col-xs-12 col-md-12 col-lg-4">
                            <div>
                                <FontAwesomeIcon icon="award" className="icon animated flipInY"></FontAwesomeIcon> <span>Premium Work</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                        Officiis expedita similique nemo eum
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