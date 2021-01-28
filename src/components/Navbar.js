import React, { Component } from "react";


import SideDrawer from "./SideDrawer/SideDrawer";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

import socialMedia from "../helpers/socialMediaLinks";
import appIcons from "../helpers/appIconLinks";

import "../styles/Nav.css";

export default class Navbar extends Component {

    constructor(props) {
        super(props);


        this.state = { sideDrawerOpen: false}

        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.renderSocialMediaIcons = this.renderSocialMediaIcons.bind(this);
        this.renderAppIcons = this.renderAppIcons.bind(this);
    }

    drawerToggleClickHandler() {
        this.setState((previousState) => {
            console.log("This->", previousState.sideDrawerOpen);
            return {sideDrawerOpen: !previousState.sideDrawerOpen}
        });
    }


    renderAppIcons() {
        let keys = Object.keys(appIcons);

        return keys.map(key => {
            console.log(appIcons[key].link)
            return(
                <a 
                    key={key}
                    className="nav-link"
                    href={`${appIcons[key].href}`}>
                    <i 
                    id={key}
                    key={key}
                    className={`inverted ${appIcons[key].link} large `}
                    />
                    <div className="show-on-hover">{appIcons[key].hoverText}</div>
                </a>
            )
        })
    }

    renderSocialMediaIcons() {
        let keys = Object.keys(socialMedia); 

        return keys.map(key => {
            return(
                
                    <a href={socialMedia[key].link}
                        className="icon-dimen"
                        key={socialMedia[key].id}
                    >
                        <i 
                         style={{marginTop: "10px"}}
                         id={key}
                         key={key}
                         className={`inverted ${key} f large icon`}
                        //  onMouseEnter={() => {
                        //      document.getElementById(key).classList.add("myHover");
                        //  }}
                        //  onMouseLeave={() => {
                        //      document.getElementById(key).classList.remove("myHover");
                        //  }}
                    />
                    </a>
            )
        })
    }

    render() {
        return(
            <div className="navbar">

                <div className="nav-logo">
                    <div className="nav-heading">
                        <img 
                        alt=""
                        className="nav-image" 
                        src={require("../helpers/SA1.png")} />
                    </div>    
                </div>

                <div className="nav-links-box">
                    {this.renderAppIcons()}
                      
                </div>

                <div className="social-media-links-box">
                    {this.renderSocialMediaIcons()}
                </div>

                <div className="navbar-toggle-button">
                    <DrawerToggleButton click={this.drawerToggleClickHandler} changeColour={this.state.sideDrawerOpen}/>
                </div>
            {this.state.sideDrawerOpen && <SideDrawer show={this.state.sideDrawerOpen} /> }

            </div>
        )
    }
}