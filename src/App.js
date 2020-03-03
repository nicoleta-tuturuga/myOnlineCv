import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/1.homePage/HomePage";
import CVPage from "./components/3.cvPage/CVPage";
import Projects from "./components/5.projects/Projects";
import Hobbies from "./components/6.hobbies/Hobbies";
import Contact from "./components/7.contactPage/Contact";
import Navbar from "./components/Header/Navbar";
import DarkMode from "./styles/DarkMode";
import ScrollToTop from "./ScrollToTop";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown, faGraduationCap, faFolderOpen, faCalendarAlt, faGlobeAmericas, faChevronCircleUp, faMobileAlt, faPaintBrush, faGlobe,
  faCheckCircle, faHeart, faAward, faSun, faMoon
} from '@fortawesome/free-solid-svg-icons';
import theMoverPage from "./pages/theMoverPage";

library.add(faAngleDoubleDown);
library.add(faGraduationCap);
library.add(faFolderOpen);
library.add(faCalendarAlt);
library.add(faGlobeAmericas);
library.add(faChevronCircleUp);
library.add(faMobileAlt);
library.add(faPaintBrush);
library.add(faGlobe);
library.add(faCheckCircle);
library.add(faHeart);
library.add(faAward);
library.add(faSun);
library.add(faMoon);



class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <BrowserRouter>

          <ScrollToTop>

            <Navbar />

            <DarkMode />

            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/myCV" component={CVPage} />
              <Route path="/projects" component={Projects} />
              <Route path="/hobbies" component={Hobbies} />
              <Route path="/contactPage" component={Contact} />
              <Route path="/theMoverGame" component={theMoverPage} />

            </Switch>

            <FontAwesomeIcon></FontAwesomeIcon>

          </ScrollToTop>

        </BrowserRouter>

      </React.Fragment>
    )
  }
}


export default App;