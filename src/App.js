import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import HomePage from "./components/1.homePage/HomePage";
import AboutMe from "./components/2.aboutMePage/AboutMe";
import CVPage from "./components/3.cvPage/CVPage";
import Projects from "./components/5.projects/Projects";
import Hobbies from "./components/6.hobbies/Hobbies";
import Contact from "./components/7.contactPage/Contact";
import Navbar from "./components/Header/Navbar";
import theMoverGame from "./pages/theMoverPage";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faGraduationCap, faFolderOpen, faCalendarAlt, faGlobeAmericas, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import theMoverPage from "./pages/theMoverPage";

library.add(faAngleDoubleDown);
library.add(faGraduationCap);
library.add(faFolderOpen);
library.add(faCalendarAlt);
library.add(faGlobeAmericas);
library.add(faChevronCircleUp);



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <BrowserRouter>

        <Navbar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutMe} />
            <Route path="/myCV" component={CVPage} />
            <Route path="/projects" component={Projects} />
            <Route path="/hobbies" component={Hobbies} />
            <Route path="/contactPage" component={Contact} />
            <Route path="/theMoverGame" component={theMoverPage} />


          </Switch>

        <FontAwesomeIcon></FontAwesomeIcon>

        </BrowserRouter>
      </React.Fragment>
    )
  }
}


export default App;