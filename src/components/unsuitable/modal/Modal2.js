import React from "react";
import "../../../styles/unsuitable/modal2.scss";

function UnsuitableCodeModal(props) {

    return (
        <div className="codeModal">
            <div className="codeModalBody" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>

    )
}

export default UnsuitableCodeModal;