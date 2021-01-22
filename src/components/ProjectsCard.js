import React, { Component } from "react";

import "../styles/ProjectsCard.css";

export default class ProjectsCard extends Component {

    constructor(props) {
        super(props);

        this.state = { 
        image: props.image,
        title: props.title,
        date: props.date,
        descripton: props.description,
        technology: props.technology
    }
}

    render() {
        console.log("reachedcard!");
        
        return(
            <div className="card" style={{backgroundImage: `url("/images/${this.state.image}")`}}>
                <div className="top-line">
                    {this.state.title}
                </div>
                <div className="date">
                    {this.state.date}
                </div>
                <div className="description">
                    {this.state.descripton}
                </div>
                <div className="technology">
                    {this.state.technology}
                </div>
                {/* {this.state.date}
                {this.state.descripton}
                {this.state.technology} */}
            </div>
        );
    }

}