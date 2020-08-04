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

    render() {

        return (
            <div>
                {/* <!-- Personal work - portofolio --> */}
                <div className="portofolio-container">
                    <div className="side-link-page">
                        <p>my work</p>
                    </div>
                    <p id="head-title">Portofolio - my work</p>
                    <div className="projects-container d-flex flex-column">
                        <div className="row d-flex justify-content-center">
                            <div className="the-mover-game col-xs-12 col-lg-5">
                                <img
                                    src={require("../../assets/images/projectsImgs/theMoverGame.png")} 
                                    alt="" />
                                <p className="project-title">The mover game</p>
                                <p>In this project the goal was to create a mini game app. There is one player (the small square on the top left on the screen). When the pages loaded the player has to move away from the obstacles which are dinamically moving twoards 
                                </p>
                                <Modal
                                    show={this.state.showMover}
                                    handleClose={()=>this.setState({ showMover: false })}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/theMoverGame.png")} 
                                        alt=""/>

                                    <Link to='/theMoverGame'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={()=>this.setState({ showMover: true })}>
                                    See more...
                                </button>
                                
                            </div>
                            <div className="movie-app col-xs-12 col-lg-5">
                                <img
                                    src={require("../../assets/images/projectsImgs/movieApp.png")} 
                                    alt="" />                                
                                    <p className="project-title">Movie Application</p>
                                <p>In this team project, the challenge was to create a movie app using resources from an API. My part was to fetch the data from the API and display them dinamically on the home page. I was also responsible with pagination of the app, styling the homepage and make it responsive
                                </p>
                                <Modal
                                    show={this.state.showMovie}
                                    handleClose={()=>this.setState({ showMovie: false })}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/movieApp.png")} 
                                        alt="" />
                                    
                                    <Link to='/movieApp'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={()=>this.setState({ showMovie: true })}>
                                    See more...
                                </button>                            
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="movie-app col-xs-12 col-lg-5">
                                <img
                                    src={require("../../assets/images/projectsImgs/nasaAPI.png")} 
                                    alt="" />                                
                                    <p className="project-title">NASA API</p>
                                <p> In this project the data are received from a NASA API, which shows a picture from space on a daily basis.
                                    The task was to add an input type="date" in order to be able to get the astronomy picture of a selected date from any month and year.
                                        </p>
                                <Modal
                                    show={this.state.showNasa}
                                    handleClose={() => this.setState({showNasa: false})}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/nasaAPI.png")} 
                                        alt="" />
                                    
                                    <Link to='/nasaAPI'>
                                        <button className="custom-styled-btn">See Project</button>
                                    </Link>

                                </Modal>
                                <button className="custom-styled-btn" type="button" onClick={() => this.setState({showNasa: true})}>
                                    See more...
                                </button>
                            </div>

                            <div className="movie-app col-xs-12 col-lg-5">
                                <img
                                    src={require("../../assets/images/projectsImgs/employees.png")} 
                                    alt="" />                                
                                    <p className="project-title">Employees Agenda</p>
                                <p>In this project I created an employees agenda with data fetched dinamically from an API. Every employee had a name, age, salary, and profile picture. I was also able to use the POST method and dinamically create a new post on that given API.
                                        </p>
                                <Modal
                                    show={this.state.showEmployees}
                                    handleClose={() => this.setState({showEmployees: false})}>
                                    <img className="modal-img"
                                        src={require("../../assets/images/projectsImgs/employees.png")} 
                                        alt="" />
                                    
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