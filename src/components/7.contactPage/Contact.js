import React from "react";

import "./Contact.css";
import "../sideLinkPage.css";

import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import StickyBtn from "../buttons/StickyBtn";
import SideBarNavbar from "../Header/SideBarNavbar";
import Quiz from "../quiz/Quiz";
import Footer from "../footer/Footer";


const Contact = () => {

    return (
        <div>

            {/* <!-- Contact container --> */}
            <div className="contact-img-container"></div>
            <div className="d-flex flex-column align-items-center">
                <div className="side-link-page">
                    <p>contact me</p>
                </div>
                <div className="contact-info-container">
                    <div className="get-in-touch">
                        <p>Get in touch</p>
                    </div>

                    <div className="contact-forms d-flex justify-content-between row flex-wrap">
                        <div className="col-xs-12 col-md-12 col-lg-6 contact-info">
                            <p id="head-title">Contact</p>
                            <p><span>Adress:</span> Strada Florilor, Nr. 186, 407280, Floresti, Cluj (România)</p>
                            <div className="google-map animated tada">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87426.01383928349!2d23.54647260497919!3d46.78336428682528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b8b%3A0xbbc601c331f148b!2sCluj-Napoca!5e0!3m2!1sen!2sro!4v1582642190181!5m2!1sen!2sro"
                                    frameBorder="0" style={{ border: '0' }} title="google-map"></iframe>
                            </div>
                            <p><span>Contact number:</span> 0741455980</p>
                            <p><span>Email:</span> <a href="#">@nicoleta.tuturuga@yahoo.com</a></p>
                            <p>Github: <SocialIcon network="github" bgColor="#000000"
                                url="https://github.com/nicoleta-tuturuga"
                                title="github" target="_blank"></SocialIcon>
                            </p>
                            <p>Related links:</p>
                            <ul className="d-flex justify-content-around">
                                <li>
                                    <SocialIcon network="facebook" bgColor="#000000"
                                        title="facebook" target="_blank"></SocialIcon>
                                </li>
                                <li>
                                    <SocialIcon network="linkedin" bgColor="#000000"
                                        title="linkedin" target="_blank"></SocialIcon>
                                </li>
                                <li>
                                    <Link to="/contactPage">
                                        <SocialIcon network="mailto" bgColor="#000000"
                                            title="email" target="_blank"></SocialIcon>
                                    </Link>
                                </li>
                            </ul>


                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-6 contact-me-form">
                            <p id="head-title" className="send-me-message-title animated fadeInUp">Send me a message</p>
                            <div className="form animated fadeInUp">
                                <form>
                                    <input type="text" placeholder="Your name*" required />
                                    <input type="text" placeholder="Your email*" required />
                                    <input type="text" placeholder="Subject" />
                                    <textarea placeholder="Type your message here"></textarea>
                                    <div className="send-me-message-btn animated fadeInUp">
                                        <button className="custom-styled-btn" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <StickyBtn />

                <SideBarNavbar></SideBarNavbar>


                <div id="quiz">
                    <Quiz></Quiz>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Contact;