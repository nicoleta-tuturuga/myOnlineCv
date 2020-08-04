import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <p className="navbar-brand">Nicoleta Tuturuga</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto d-flex justify-content-around">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/myCV'>My CV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/projects'>Personal Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/hobbies'>Hobbies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contactPage'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;