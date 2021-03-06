import React, { Component, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "../components/Footer";

import "../styles/App.css";

export default class App extends Component {

    constructor() {
        super();
        this.state = { showProject: false};

        this.changeShowDisplay = this.changeShowDisplay.bind(this);
    }

    changeShowDisplay() {
        this.setState((previousState) => {
            return {showProject: !previousState.showProject}
        });
    }

    render() {

        return(
            <React.Fragment>
                
                <BrowserRouter>
                    <div className="contents">
                        <Navbar  />
                        {/* <SideDrawer show={this.state.sideDrawerOpen}/> */}

                        <div className="sizing-div">
                        
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Contact" component={Contact} />   
                            <Route exact path="/About" component={About} /> 
                            <Route exact path="/Projects" component={Projects} showDisplay={this.changeShowDisplay} />
                            <Route exact path="/Skills" component={Skills} />
                        
                        </div>
                        
                        <Footer />
                    </div>
                
                </BrowserRouter>


            </React.Fragment>
        );
    }
}