import React from "react";

import "./ExpandableText.css";

class ExpandableText extends React.Component {

    state = {
        expanded: false
    };

    toggleText = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const expanded = this.state.expanded;
        let button;
        
        if(expanded) {
            button = <button className="custom-styled-btn" onClick={this.toggleText}>Read less</button>
        } else {
            button = <button className="custom-styled-btn" onClick={this.toggleText}>Read more</button>
        }

        return (
            <div>
                <div className={expanded ? "" : "hidden"}>
                    {this.props.children}
                </div>
                {button}
            </div>
        )
    }
};

export default ExpandableText;