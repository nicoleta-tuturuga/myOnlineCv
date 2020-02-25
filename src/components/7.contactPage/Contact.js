import React from "react";

import "./Contact.css";
import "../sideLinkPage.css";

import SideBarNavbar from "../Header/SideBarNavbar";


const Contact = () => {

    return (
        <div>

            {/* <!-- Contact container --> */}
            <div class="contact-img-container">
                <div className="side-link-page">
                    <p>contact me</p>
                </div>
                <div class="contact-info-container">
                    <div class="get-in-touch">
                        <p>Get in touch</p>
                    </div>
                    {/* <!-- <div class="row"> --> */}
                    <div class="contact-forms">
                        <div class="col-lg-6 col-md-12 col-sm-12 contact-info">
                            <p id="head-title">Contact</p>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p><span>Adress:</span> Strada Florilor, Nr. 186, 407280, Floresti, Cluj (România)</p>
                            <div className="google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87426.01383928349!2d23.54647260497919!3d46.78336428682528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b8b%3A0xbbc601c331f148b!2sCluj-Napoca!5e0!3m2!1sen!2sro!4v1582642190181!5m2!1sen!2sro" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>
                            </div>
                            <p><span>Contact number:</span> 0741455980</p>
                            <p><span>Email:</span> <a href="#">@nicoleta.tuturuga@yahoo.com</a></p>
                            <p><span>Github: </span> <a href="#">github</a></p>
                            <p>Related links:</p>
                            

                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 contact-me-form">
                            <div class="form">
                                <form>
                                    <input type="text" placeholder="Your name*" required />
                                    <input type="text" placeholder="Your email*" required />
                                    <input type="text" placeholder="Subject" />
                                    <textarea placeholder="Type your message here"></textarea>
                                    <button type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <SideBarNavbar></SideBarNavbar>

            </div>
        </div>
    )
}

export default Contact;