import React, { Component } from "react";

import appIcons from "../../helpers/appIconLinks";

import "../../styles/SideDrawer.css";

export default class SideDrawer extends Component {

    constructor(props) {
        super(props);

        this.renderAppIcons = this.renderAppIcons.bind(this);
    }

    renderAppIcons() {
        let keys = Object.keys(appIcons);

        return keys.map(key => {
            return(
                <a
                className="nav-link"
                key={key}
                href={`${appIcons[key].href}`}
                >
                <i
                id={key}
                key={key}
                className={`inverted ${appIcons[key].link} large`}
                />
                <div className="show-on-hover">
                {appIcons[key].hoverText}
                </div>
                </a>
            );
        });
    }

    render() {
        let drawerClasses = "side-drawer";
        if(this.props.show) {
            drawerClasses = "side-drawer open";
        }
        return (
            <nav className={drawerClasses}>
                <div className="drawer-icon-box">
                    {this.renderAppIcons()}
                </div>
            </nav>    
        )
    }
}