import React from "react";

import "./CVPage.css";
import "../sideLinkPage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import SideBarNavbar from "../Header/SideBarNavbar";


const CVPage = () => {

    return (

        <div>
            <div className="root-parent-myCV">
                <img
                    src={require('../../assets/images/backgrounds/photo-1500989145603-8e7ef71d639e.jpg')}
                />
            </div>
            {/* <!-- CV Page container --> */}
            <div class="cv-container">
                <div className="side-link-page">
                    <p>my cv</p>
                </div>
                <div class="my-cv-contact-info">
                    <p>Nicoleta Tuturuga</p>
                    <p>0741455980/</p>
                    <a href="#">
                        nicoleta.tuturuga@yahoo.com
                    </a>
                </div>
                <p id="head-title">My CV</p>
                <div class="cv-container-wrapper">
                    <div class="education-container animated slideInDown">
                        <p id="head-title">
                            <FontAwesomeIcon icon="graduation-cap"></FontAwesomeIcon> Education
                        </p>
                        <ul className="timeline">
                            <li>
                                <button data-toggle="collapse" href="#collapseTimeline" role="button"
                                    aria-expanded="false" aria-controls="collapseTimeline">

                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> October 2019 - March 2020
                                    <div className="collapse" id="collapseTimeline">
                                        <p class="section-title">Informal School of IT - Advanced Web Module</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nihil voluptate
                                            cumque
                                            natus numquam excepturi et provident ipsum doloribus corrupti, repellendus eius. Quaerat
                                            voluptatibus amet suscipit possimus error dolorum?</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button data-toggle="collapse" href="#collapseTimeline" role="button"
                                    aria-expanded="false" aria-controls="collapseTimeline">

                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> January 2020 - Present
                                    <div className="collapse" id="collapseTimeline">
                                        <p class="section-title">Iquest - Web development remote learning course</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nihil voluptate cumque
                                            natus numquam excepturi et provident ipsum doloribus corrupti, repellendus eius. Quaerat
                                            voluptatibus amet suscipit possimus error dolorum?</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button data-toggle="collapse" href="#collapseTimeline" role="button"
                                    aria-expanded="false" aria-controls="collapseTimeline">
                                </button>
                                <div>
                                    <FontAwesomeIcon icon="calendar-alt"></FontAwesomeIcon> October 2014 - July 2018
                                <div className="collapse" id="collapseTimeline">
                                        <p class="section-title">Law School - Babes Bolyai Univerity, Cluj-Napoca</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nihil voluptate cumque
                                            natus numquam excepturi et provident ipsum doloribus corrupti, repellendus eius. Quaerat
                                            voluptatibus amet suscipit possimus error dolorum?</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="experience-container animated slideInUp">
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

                <div>
                    <p id="head-title">Programming Skills</p>
                </div>

                <SideBarNavbar />

            </div>
        </div>
    )
}

export default CVPage;