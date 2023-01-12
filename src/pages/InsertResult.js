import React, {useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import InsertResultAction from "../redux/modules/InsertResult/InsertResultAction";
import RegisterList from "../components/InsertResult/RegisterList"
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import ConclusionList from "../components/InsertResult/ConclusionList";
import {useParams} from "react-router-dom";

const InsertResult = () => {
    const {ConclusionInfo} = useSelector((state) => state.ConclusionInfo);
    const {MessageInfo} = useSelector((state) => state.MessageInfo);
    const [code,setCode] = useState('');
    const [register,setRegister] = useState('');
    const [render,setRender] = useState(1);
    const [order,setOrder] =useState('');

    const dispatch = useDispatch();


    const onConclusion = (barcode, registerCode, orderCode) =>{
        dispatch(InsertResultAction.getSearchConclusion(barcode));
        dispatch(InsertResultAction.getSearchInspectionType(orderCode));
        setCode(barcode);
        setRegister(registerCode);
        setOrder(orderCode);
    };

    const onRegister = ()=>{
        setRender(render+1);
    }

    return (
        <div className="wrap">
            <div className="max-size-wrap">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>검사결과 등록 <span>Registration of inspection results</span></h2>
                </div>
                <div className="content-wrap">
                    <div className="left-content-wrap">
                        <RegisterList onConclusion={onConclusion} render={render} MessageInfo={MessageInfo} />
                    </div>
                    <div className="right-content-wrap">
                        <ConclusionList ConclusionInfo={ConclusionInfo} code={code} order={order} register={register} onRegister={onRegister} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertResult;