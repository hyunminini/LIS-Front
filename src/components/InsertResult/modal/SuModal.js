import React, {useState} from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import "../../../styles/insertResult/modal.scss"
import UnsuitableItem from "./UnsuitableItem"

const SuModal = ({UnsuitableStatusInfo,pre}) =>{

    const [text,setText]=useState('');

    return (
        <div className="modal_wrap">
            <div className="modal_title">
                <ArticleOutlinedIcon/>
                <p>체혈 부적합 사유 </p>
            </div>
            <div>

                <div className="modal_left_wrap">
                    {UnsuitableStatusInfo.data.map((data,index)=>{
                        if(data.prescribeCode===pre && data.unsuitableStatusCode==='SU'){
                            return(
                                <UnsuitableItem key={index} data={data} setText={setText} />
                            )
                        }
                        return null;
                    })}
                </div>
                <div className="modal_right_wrap">
                    <div className="modal_right_story">
                        <div>{text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuModal;
