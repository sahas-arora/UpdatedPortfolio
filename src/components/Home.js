import React, { Component } from "react";

import "../styles/Home.css";
 

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="home-container">

                <div className="home-left">
                    <div className="home-description">
                        <h1 className="heading-1">
                            <span>H</span>
                            <span>i</span>
                            <span>,</span>                          
                        </h1>
                        <h2 className="heading-2">
                            <span>I</span>
                            <span>'</span>
                            <span>m</span>              
                            <span style={{marginRight:"1.25em"}}>&nbsp;</span>              
                            <span>S</span>
                            <span>a</span>
                            <span>h</span>              
                            <span>a</span>
                            <span>s</span>
                            <span style={{marginRight:"1.25em"}}>&nbsp;</span>
                            <span>A</span>              
                            <span>r</span>              
                            <span>o</span>              
                            <span>r</span>              
                            <span>a</span>                         
                            <span>.</span>              
                        </h2>
                        <div className="heading-sub">
                            Front-End | Back-End | Full-Stack | Gaming
                        </div>
                        {/* <h3 className="heading-3">little miss poopster.</h3> */}
                    </div>

                    {/* <div className="home-contact-button"> */}
                        <button className="my-button">
                                <a href="mailto:sahasarora@gmail.com">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    CONTACT ME
                                </a>
                        </button> 

                        
                        <button className="my-button">
                                <a href={require("../helpers/CV_Dan_Sahas_Vol_2.pdf")}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    RESUME
                                </a>
                        </button> 
                    {/* </div> */}
                </div>

                <div className="home-right">
                    <div className="home-big-logo">
                        <img 
                        // style={{width: 300, height: 300}}
                        alt="Linda Logo"
                        src={require("../helpers/new_s_logo.png")} />
                    </div>
                </div>

            </div>
        )
    }
}
