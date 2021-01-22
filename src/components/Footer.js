import React, { Component } from "react";

import socialMedia from "../helpers/socialMediaLinks";

import "../styles/Footer.css";

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.renderSocialMedia = this.renderSocialMedia.bind(this);
    }

    renderSocialMedia() {
        let keys = Object.keys(socialMedia);

        return keys.map(key => {
            return (
                <a 
                href={socialMedia[key].link}
                key={socialMedia[key].id}
                className="footer-icon-dimen">
                    <i 
                        id={key}
                        key={key}
                        className={`inverted ${key} f large icon`}
                    />    
                </a>
            )
        })
    }

    render() {
        return(
            <div className="footer">
                 {this.renderSocialMedia()}
            </div>
        )
    }

}