import React from "react";
import "../../../styles/insertResult/modalSecond.scss"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function ModalSecond(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="modal_second_con" onClick={closeModal}>
            <div className="modal_second_size" onClick={(e) => e.stopPropagation()}>
                <CloseOutlinedIcon className="modal_second_close_btn" onClick={closeModal}/>
                {props.children}
            </div>
        </div>
    );
}

export default ModalSecond;