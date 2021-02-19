import React, { Component } from "react";

import Chart from "../components/Chart/Chart";

import "../styles/Skills.css";

export default class Skills extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="skills-container">
                <div className="skills-left">

                    <div className="skills-heading">
                        <span>S</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                        {/* <span>/</span>
                        <span>E</span>
                        <span>x</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                        <span>i</span>
                        <span>e</span>
                        <span>n</span>
                        <span>c</span>
                        <span>e</span> */}
                    </div>

                    <ul className="skills-description">
                        <li className="line-desc">The main area of my expertise lies in Web Development and Application Developmet</li>
                        <li className="line-desc">HTML, CSS, building small and medium web applications with React, custom plugins, features, animations and coding interactive and responsive layouts. </li>
                        <li className="line-desc">I also have experience in prototyping tools such as Figma and Mural</li>
                        <li className="line-desc">Visit my LinkedIn profile for more details, or just contact me here!</li>
                    </ul>

                </div>

                <div className="skills-right">
                    <Chart />
                </div>

            </div>
        )
    }
} 