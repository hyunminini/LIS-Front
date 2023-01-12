import React from "react";
import "../../../styles/unsuitable/modal3.scss";

function UnsuitableModal(props) {

    return (
        <div className="Modal3">
            <div className="modalBody3" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>

    )
}

export default UnsuitableModal;