import React from "react";
import "../../../styles/unsuitable/modal1.scss";

function UnsuitableModal(props) {

    return (
        <div className="Modal2">
            <div className="modalBody2" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>

    )
}

export default UnsuitableModal;