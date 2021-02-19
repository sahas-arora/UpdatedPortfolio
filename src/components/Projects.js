import React, { Component } from "react";

import projects from "../helpers/projects";

import "../styles/Projects.css";

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: projects,
            blurBackground: false
        };


        this.renderImages = this.renderImages.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.handleSelectedCard = this.handleSelectedCard.bind(this);
    }

    componentDidMount() {
        this.setState({ projects} );
    }

    renderImages() {
        let keys = Object.keys(this.state.projects);

        return keys.map((key)=> {
            let imageBox = this.state.projects[key].showDetails ? "project-image blur" : "project-image";
                return(
                <div className="image-box"
                    // id={this.state.projects[key].id}
                    // key={this.state.projects[key].id}
                >
                    <div 
                    id={this.state.projects[key].id}
                    alt=""
                    key={this.state.projects[key].id}
                    className={imageBox}
                    onClick={() => {
                        this.handleSelectedCard(key);
                        this.setState((previousState) => {
                            return { showProjectCard: !previousState.showProjectCard}
                        })
                    }
                    }
                    style={{maxWidth: "100%", backgroundImage: `url("/images/${projects[key].image}")`}}>
                    </div>
                    <div className="projectCard-container">
                        {this.state.projects[key].showDetails ? 
                        <div className="yoo">
                            {this.renderCard(key)}
                        </div>  
                        :
                        null  
                    }
                    </div>
                    {/* <div>
                        {this.state.projects[key].showDetails && this.renderCard(key)} 
                    </div> */}
                </div>
            )
        })

    }
    

    handleSelectedCard(key) {
        let newProject = {...projects};
        newProject[key].showDetails = !newProject[key].showDetails;
        this.setState((previousState) => {
            return { blurBackground: !previousState.blurBackground, projects: newProject}
        })
    }

    renderCard(key) {
            return(
                <div 
                // className="card"
                key={this.state.projects[key].id}
                // style={{border: "1px solid red"}}
                onClick={() => this.handleSelectedCard(key)}
                >
                    <div className="project-title">
                        {this.state.projects[key].title}
                    </div>

                    <div className="project-date">
                        {this.state.projects[key].date}
                    </div>

                    <div className="project-description">
                        {this.state.projects[key].description}
                    </div>

                    <div className="project-technologies">
                        {this.state.projects[key].technology}
                    </div>
                </div>
            )
    }



    render() {
        return(
            <div className="projects">
            {this.state.showProjectCard ?
                console.log("Yo")
                : null}
                <div className="projects-left">
                    {this.renderImages()}
                </div>
            </div>
        )
    }
}