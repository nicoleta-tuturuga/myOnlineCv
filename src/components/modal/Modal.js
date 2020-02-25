import React from "react";

import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose} className="modal-closing-btn">close</button>
          {/* <button  className="modal-link-btn">See project</button> */}
        </section>
      </div>
    );
  };

export default Modal;