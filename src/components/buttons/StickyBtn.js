import React from "react";

import "./StickyBtn.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StickyBtn = () => {

    return (
        <div>
            <button onClick={goToTop} 
            className="go-up-btn" type="submit">
                <FontAwesomeIcon icon="chevron-circle-up"></FontAwesomeIcon>
            </button>
        </div>
    )
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

export default StickyBtn;