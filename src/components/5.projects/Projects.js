import React from "react"

import "./Projects.css";
import "../sideLinkPage.css";

import { Link } from "react-router-dom";

import SideBarNavbar from "../Header/SideBarNavbar";
import Modal from "../modal/Modal";
import theMoverPage from "../../pages/theMoverPage";


class Projects extends React.Component {

    state = {
        show: false
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {

        return (
            <div>
                {/* <!-- Personal work - portofolio --> */}
                <div class="portofolio-container">
                    <div className="side-link-page">
                        <p>my work</p>
                    </div>
                    <p id="head-title">Portofolio - my work</p>
                    <div class="projects-container">
                        <div class="row d-flex">
                            <div class="the-mover-game col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/backgrounds/photo-1502465771179-51f3535da42c.jpg")} />
                                <p>The mover game</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias quas voluptate
                                    soluta,
                                    eos non, ipsam nisi aliquid atque aperiam ex deleniti iusto laudantium. Eaque quidem fugiat
                                    maxime
                                    eveniet nemo.
                            </p>
                                <Modal
                                    show={this.state.show}
                                    handleClose={this.hideModal}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/backgrounds/photo-1502465771179-51f3535da42c.jpg")} />
                                    
                                    <Link to='/theMoverGame'>
                                        <button>See Project</button>
                                    </Link>

                                </Modal>
                                <button type="button" onClick={this.showModal}>
                                    See more...
                                </button>
                                
                                
                               
                            </div>
                            <div class="movie-app col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/backgrounds/photo-1502465771179-51f3535da42c.jpg")} />                                <p>Movie Application</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias quas voluptate
                                    soluta,
                                    eos non, ipsam nisi aliquid atque aperiam ex deleniti iusto laudantium. Eaque quidem fugiat
                                    maxime
                                    eveniet nemo.
                    </p>
                                <button type="submit">See more...</button>
                            </div>
                        </div>
                        <div class="row d-flex">
                            <div class="the-mover-game col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/backgrounds/photo-1502465771179-51f3535da42c.jpg")} />                                <p>The mover game</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias quas voluptate
                                    soluta,
                                    eos non, ipsam nisi aliquid atque aperiam ex deleniti iusto laudantium. Eaque quidem fugiat
                                    maxime
                                    eveniet nemo.
                            </p>
                                <button type="submit">See more...</button>
                            </div>
                            <div class="movie-app col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/backgrounds/photo-1502465771179-51f3535da42c.jpg")} />                                <p>Movie Application</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias quas voluptate
                                    soluta,
                                    eos non, ipsam nisi aliquid atque aperiam ex deleniti iusto laudantium. Eaque quidem fugiat
                                    maxime
                                    eveniet nemo.
                                        </p>
                                <button type="submit">See more...</button>
                            </div>
                        </div>
                    </div>

                    <SideBarNavbar />

                </div>

            </div>
        )
    }
}

export default Projects;