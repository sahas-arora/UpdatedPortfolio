import React, { Component } from "react";

import "../../styles/DrawerToggleButton.css";

// const drawerToggle = props => (

//     if(props.changeColour) {
//         return(
//             <button className="toggle-button"
//                     onClick={props.click}
//             >
//                 <div className="toggle-button__line"></div>
//                 <div className="toggle-button__line"></div>
//                 <div className="toggle-button__line"></div>
//             </button>

//         )
//     }
// );

export default class DrawerToggle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let toggleButtonColour = "toggle-button__line";
        if(this.props.changeColour) {
            toggleButtonColour = "toggle-button__line__colour";
        }
            return(
                <button className="toggle-button"
                        onClick={this.props.click}
                >
                    <div className={toggleButtonColour}></div>
                    <div className={toggleButtonColour}></div>
                    <div className={toggleButtonColour}></div>
                </button>        
            )

        }

}

