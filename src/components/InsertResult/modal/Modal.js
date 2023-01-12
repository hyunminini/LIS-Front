import React from "react";
import "../../../styles/insertResult/modal.scss"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Modal(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="modal_con" onClick={closeModal}>
            <div className="modal_size" onClick={(e) => e.stopPropagation()}>
                <CloseOutlinedIcon className="modal_close_btn" onClick={closeModal}/>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;