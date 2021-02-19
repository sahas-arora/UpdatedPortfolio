import React, { Component } from "react";

import "../styles/Contact.css";


export default class Contact extends Component {

    constructor(props){
        super(props);

        this.state = { name: "", email: "", title: "", message: "" }

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="contact">
                <div className="contact-left">

                    <div className="contact-form-heading">
                        <span>c</span>
                        <span>o</span>
                        <span>n</span>
                        <span>t</span>
                        <span>a</span>
                        <span>c</span>
                        <span>t</span>
                        <span>M</span>
                        <span>e</span>
                    </div>

                    <div className="contact-form-description">
                    I'm currently looking for internships and part-time work opportunities. If you liked what you saw here,
                    contact me using the form below. You could also just say hi :) Looking forward to hearing from you!
                    </div>

                    <form 
                       onSubmit={this.onFormSubmit}
                       className="contact-form">

                        <input 
                            id="name"
                            placeholder="Name"
                            className="input-fields"
                            type="text"
                            onChange={e => this.setState({ name: e.target.value})}
                            value={this.state.name}
                        />
                        <input 
                            id="email"
                            placeholder="Email"
                            className="input-fields"
                            type="text"
                            onChange={e => this.setState({ email: e.target.value})}
                            value={this.state.email}
                        />
                        <input 
                            id="title"
                            placeholder="Title"
                            className="input-fields"
                            type="text"
                            onChange={e => this.setState({ title: e.target.value})}
                            value={this.state.title}
                        />
                        <textarea 
                            id="message"
                            placeholder="Message"
                            className="message-input-field"
                            type="text"
                            onChange={e => this.setState({ message: e.target.value})}
                            value={this.state.message}
                        />

                        <div className="button-box">
                            <button type="submit" className="submit-button">
                                SEND
                            </button>
                        </div>
                        
                    </form>

                </div>

                <div className="contact-right">
                
                </div>

            </div>

        );
    }
}