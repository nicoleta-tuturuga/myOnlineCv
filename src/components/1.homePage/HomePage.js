import React from "react";

import "./HomePage.css";
import "../sideLinkPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';

import SideBarNavbar from "../Header/SideBarNavbar";
import AboutMePage from "../2.aboutMePage/AboutMe";
import Footer from "../footer/Footer";



class HomePage extends React.Component {

  state = {
    displayAboutMeSection: false
  }

  getAnimationStart = () => {
    this.setState({ displayAboutMeSection: true })
  }

  render() {

    let aboutMePage;

    if (this.state.displayAboutMeSection === true) {
      aboutMePage = <AboutMePage ></AboutMePage>
    }

    return (
      <div className="parent">

        {/* <!-- Home Page container --> */}
        <div className="img-container d-flex">
          <div className="side-link-page">
            <p>home</p>
          </div>

          <div className="main-presentation align-self-start">
            <div className="type-writter-effect">
              <p id="head-title">Hello, I'm Nicoleta.</p>
            </div>
            <p>"All our dreams can come true if we have the courage to pursue them."
                    </p>

            {/* <!-- Social network icons --> */}
            <div className="widget-wrap-social-networks">
              <ul className="social-networks">
                <li>
                  <SocialIcon network="facebook" bgColor="#000000"
                    url="https://www.facebook.com/tuturuga.niko"
                    title="facebook" target="_blank"></SocialIcon>
                </li>
                <li>
                  <SocialIcon network="github" bgColor="#000000"
                    url="https://github.com/nicoleta-tuturuga"
                    title="github" target="_blank"></SocialIcon>
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
                <li>
                  <SocialIcon network="instagram" url="https://www.instagram.com/nicotuturuga/?igshid=19603gdl5y8a0&fbclid=IwAR2ilC241XTONY6kJr3a2XzwEyorZI-x8CdL7uQzFFudpa7Ngy9YRp1VuFk" bgColor="#000000"
                    title="instagram" target="_blank"></SocialIcon>
                </li>
              </ul>
            </div>
          </div>


          <SideBarNavbar></SideBarNavbar>

          <div className="arrow-wrap animated slideInDown"
            onClick={this.getAnimationStart}>
            <a href="#path-to-about-page">
              <FontAwesomeIcon icon="angle-double-down"></FontAwesomeIcon>
            </a>
          </div>

        </div>

        {/* About me page section */}
        <div id="path-to-about-page">
          {aboutMePage}
        </div>

        <Footer />

      </div>

    )
  }
}

export default HomePage;