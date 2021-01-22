import React, { Component } from "react";

import "../styles/About.css";

export default class About extends Component {

    render() {
        return(
            <div className="about">
                <div className="about-left">

                    <div className="about-heading">
                        <span>A</span>
                        <span>b</span>
                        <span>o</span>
                        <span>u</span>
                        <span>t</span>
                        <span>M</span>
                        <span>e</span>
                    </div>
                    
                    <ul className="about-description">
                        <li className="line-desc">
                                I'm Sahas, a software engineer from India
                                who's based in Copenhagen, Denmark. I love to play the guitar,
                                write songs and sing. But above all,
                                I love to code. I look at code and music as means to 
                                express yourself, your ideas and showcase creativity.
                        </li>
                        <li className="line-desc">
                                After graduating from San Francisco State University,
                                I started working at Tessora LLC as a web developer, 
                                where I'm responsible for overlooking the development 
                                and the maintenance of www.tessoraclothing.com 
                        </li>
                        <li className="line-desc">
                                Currently, I'm based in Copenhagen, pursuing my master's in Computer Science 
                                at Denmark Technical University (DTU). I'm looking for an internship as a 
                                Front-End/Full-Stack web developer.
                        </li>
                    </ul>


                    <div className="experiece-timeline">
                        
                    </div>

                </div>

                <div className="about-right">   
                    <div className="about-image-container">
                        <img
                            className="about-image"
                            alt="sahasArora_DTU.png"
                            src={require("../helpers/portfolio_image.png")}
                        />
                    </div>
                </div>

            </div>
        )
    }
}