import React from "react";

import "./Contact.css";
import "../sideLinkPage.css";

import { SocialIcon } from 'react-social-icons';

import StickyBtn from "../buttons/StickyBtn";
import SideBarNavbar from "../Header/SideBarNavbar";
import Quiz from "../quiz/Quiz";
import Footer from "../footer/Footer";


class Contact extends React.Component {

  state = {
    name: "",
    nameErrorLength: "",
    email: "",
    emailErrorInvalid: ""
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateForm = () => {

    let nameErrorLength = "";
    let emailErrorInvalid = "";

    console.log("Before: " + this.state.name)
    if (this.state.name.length <= 2) {
      nameErrorLength = "Name must be at least 3 characters long."
      console.log(this.state.name)
    }

    if (!this.state.email.includes("@")) {
      emailErrorInvalid = "Please enter a valid email.";
    }

    this.setState({
      nameErrorLength,
      emailErrorInvalid
    });

    return true;
  }

  handleValidation = event => {
    event.preventDefault();
    this.validateForm();
  }

  render() {

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
                <p><span>Email:</span> <span>@nicoleta.tuturuga@yahoo.com</span></p>
                <div>Github: <SocialIcon network="github" bgColor="#000000"
                  url="https://github.com/nicoleta-tuturuga"
                  title="github" target="_blank"></SocialIcon>
                </div>
                <p>Related links:</p>
                <ul className="d-flex justify-content-around">
                  <li>
                    <SocialIcon network="facebook" bgColor="#000000"
                      url="https://www.facebook.com/tuturuga.niko"
                      title="facebook" target="_blank"></SocialIcon>
                  </li>
                  <li>
                    <SocialIcon network="linkedin" bgColor="#000000"
                      url="https://www.linkedin.com/in/nicoleta-tuturuga-8797041a3/"
                      title="linkedin" target="_blank"></SocialIcon>
                  </li>
                  <li>
                    <SocialIcon network="mailto" bgColor="#000000"
                      title="email" url="/contactPage"></SocialIcon>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6 contact-me-form">
                <p id="head-title" className="send-me-message-title animated fadeInUp">Send me a message</p>
                <div className="form animated fadeInUp">
                  <form onSubmit={this.handleValidation}>
                    <input className={(this.state.nameErrorLength) ? 'alertInput' : ''}
                      type="text"
                      name="name"
                      placeholder="Your name*"
                      value={this.state.name}
                      onChange={this.handleChange} />
                    <div 
                    className={(this.state.nameErrorLength) ? 'alert alert-danger visible' : 'alert alert-danger hidden'}>
                      {this.state.nameErrorLength}
                    </div>

                    <input className={(this.state.emailErrorInvalid) ? 'alertInput' : ''}
                      type="text"
                      name="email"
                      placeholder="Your email*"
                      value={this.state.email}
                      onChange={this.handleChange} />
                    <div className={(this.state.emailErrorInvalid) ? 'alert alert-danger visible' : 'alert alert-danger hidden'}>
                      {this.state.emailErrorInvalid}
                    </div>

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
}

export default Contact;