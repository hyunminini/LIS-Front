import React, {useEffect, useState} from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import "../../../styles/insertResult/modal.scss"
import UnsuitableItem from "./UnsuitableItem"

const CuModal = ({UnsuitableStatusInfo,pre}) =>{

    const [text,setText]=useState('');
    const [a,setA] = useState([]);

    const onText = (value) => {
        console.log(value);
        setText(value);
    }

    useEffect(()=>{
        setA([]);
        {UnsuitableStatusInfo.data.map((data,index)=>{
            if(data.prescribeCode===pre && data.unsuitableStatusCode==='CU'){
                setA(a=>[...a, {code:data.unsuitableReasonCode, reason:data.unsuitableReasonName, text:data.unsuitableReasonText}])
            }
            return null;
        })}

    },[UnsuitableStatusInfo])

    return (
        <div className="unsuitable_modal_wrap">
            <div className="unsuitable_modal_title">
                <ArticleOutlinedIcon/>
                <p>체혈 부적합 사유 </p>
            </div>
            <div className="unsuitable_modal_story">
                <select onChange={value=>onText(value.target.value)} >
                    {a.length>0 && a.map((data)=>{
                        return (<option value={data.text}>{data.code} ({data.reason})</option>)
                    })}
                </select>
                <div>{text}</div>
            </div>
        </div>
    )
}

export default CuModal;
