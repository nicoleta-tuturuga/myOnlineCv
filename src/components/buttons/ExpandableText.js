import React, { Component } from "react";

import "./ExpandableText.css";

class ExpandableText extends React.Component {

    state = {
        expanded: false
    };

    toggleText = () => {
        this.setState({ expanded: !this.state.expanded })
    }
    
    // hideText = () => {
    //     this.setState({ expanded : this.state.expanded});
    // }

    render() {
        const expanded = this.state.expanded;
        let button;
        
        // if else statement 
        if(expanded) {
            button = <button onClick={this.toggleText}>Read less</button>
        } else {
            button = <button onClick={this.toggleText}>Read more</button>
        }

        return (
            <div>
                {/* <div className="toggle-btn"> */}
                <div className={expanded ? "" : "hidden"}>
                    {this.props.children}
                </div>
                {/* <button type="button">Read more</button> */}
                {button}
            </div>
        )
    }
};

export default ExpandableText;