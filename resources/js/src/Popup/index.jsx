import React from "react";
import "./Popup.scss";

function Popup(data) {
    let { display, message } = data;
    return (
        <div style={{display: display}} className="blc-popup">
            <div className="window-popup">
                <div className="content">
                    <p className="text">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Popup;
