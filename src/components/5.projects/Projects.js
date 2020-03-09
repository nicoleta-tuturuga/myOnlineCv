import React from "react"

import "./Projects.css";
import "../sideLinkPage.css";

import { Link } from "react-router-dom";

import SideBarNavbar from "../Header/SideBarNavbar";
import Modal from "../modal/Modal";
import StickyBtn from "../buttons/StickyBtn";
import Footer from "../footer/Footer";


class Projects extends React.Component {

    state = {
        showMover: false,
        showMovie: false,
        showNasa: false,
        showEmployees: false
    };

    // showModal = () => {
    //     this.setState({ show: true });
    // };

    // hideModal = () => {
    //     this.setState({ showMover: false });
    // };

    render() {

        return (
            <div>
                {/* <!-- Personal work - portofolio --> */}
                <div className="portofolio-container">
                    <div className="side-link-page">
                        <p>my work</p>
                    </div>
                    <p id="head-title">Portofolio - my work</p>
                    <div className="projects-container">
                        <div className="row d-flex">
                            <div className="the-mover-game col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/projectsImgs/theMoverGame.png")} />
                                <p className="project-title">The mover game</p>
                                <p>In this project the goal was to create a mini game app. There is one player (the small square on the top left on the screen). When the pages loaded the player has to move away from the obstacles which are dinamically moving twoards 
                                </p>
                                <Modal
                                    show={this.state.showMover}
                                    handleClose={()=>this.setState({ showMover: false })}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/theMoverGame.png")} />
                                    
                                    <Link to='/theMoverGame'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={()=>this.setState({ showMover: true })}>
                                    See more...
                                </button>
                                
                            </div>
                            <div className="movie-app col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/projectsImgs/movieApp.png")} />                                
                                    <p className="project-title">Movie Application</p>
                                <p>about movie app.
                                </p>
                                <Modal
                                    show={this.state.showMovie}
                                    handleClose={()=>this.setState({ showMovie: false })}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/movieApp.png")} />
                                    
                                    <Link to='/movieApp'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={()=>this.setState({ showMovie: true })}>
                                    See more...
                                </button>                            
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="movie-app col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/projectsImgs/nasaAPI.png")} />                                
                                    <p className="project-title">NASA API</p>
                                <p> In this project the data are received from a NASA API, which shows a picture from space on a daily basis.
                                    The task was to add an input type="date" in order to be able to get the astronomy picture of a selected date from any month and year.
                                        </p>
                                <Modal
                                    show={this.state.showNasa}
                                    handleClose={() => this.setState({showNasa: false})}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/nasaAPI.png")} />
                                    
                                    <Link to='/nasaAPI'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={() => this.setState({showNasa: true})}>
                                    See more...
                                </button>
                            </div>

                            <div className="movie-app col-xs-12 col-lg-6">
                                <img
                                    src={require("../../assets/images/projectsImgs/employees.png")} />                                
                                    <p className="project-title">Employees Agenda</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias quas voluptate
                                    soluta,
                                    eos non, ipsam nisi aliquid atque aperiam ex deleniti iusto laudantium. Eaque quidem fugiat
                                    maxime
                                    eveniet nemo.
                                        </p>
                                <Modal
                                    show={this.state.showEmployees}
                                    handleClose={() => this.setState({showEmployees: false})}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/employees.png")} />
                                    
                                    <Link to='/employeesApiPage'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={() => this.setState({showEmployees: true})}>
                                    See more...
                                </button>
                            </div>
                        </div>
                    </div>

                    <StickyBtn />

                    <SideBarNavbar />

                </div>

                <Footer />

            </div>
        )
    }
}

export default Projects;