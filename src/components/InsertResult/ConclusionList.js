import ConclusionItem from "./ConclusionItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import {useDispatch, useSelector} from "react-redux";
import DefaultData from "../common/DefaultData/DefaultData"
import Swal from "sweetalert2";

const ConclusionList = ({ConclusionInfo, code,order, register, onRegister}) => {

    const Toast = Swal.mixin({
        toast: true,
        icon: 'warning',
        position: 'top-right',
        width: 410,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        background:'#EEEEEE',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const {InspectionTypeInfo} = useSelector((state) => state.InspectionTypeInfo);

    const dispatch = useDispatch();

    const [conclusionDataList,setConclusionDataList]=useState([]);
    const [disable,setDisable] = useState(false);

    const addResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            Toast.fire({
                title:"검사결과를 입력해주세요",
            })
            return
        }
        dispatch(InsertResultAction.insertConclusionResult(conclusionDataList));
        setDisable(true);
        onRegister();
        Swal.fire({
            title: '검체:'+code+' 결과 등록 되었습니다.',
            icon: 'success',
            confirmButtonColor: '#3C9DF6',
            confirmButtonText: '확인'
        })
        setConclusionDataList([]);
        dispatch(InsertResultAction.getSearchInspectionType(''));
    });


    const updateResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            Toast.fire({
                title:"검사결과를 입력해주세요",
            })
            return
        }
        dispatch(InsertResultAction.updateConclusion(conclusionDataList));
        Swal.fire({
            title: '검체:'+code+' 결과 수정 되었습니다.',
            icon: 'success',
            confirmButtonColor: '#3C9DF6',
            confirmButtonText: '확인'
        })
        dispatch(InsertResultAction.getSearchInspectionType(''));
    });

    useEffect(()=>{
        setDisable(false);
        if(conclusionDataList.length>0 && conclusionDataList[0].figures !== ''){
            setDisable(true);
        }
    },[conclusionDataList]);

    useEffect(()=>{
        setConclusionDataList([]);
        if(code ===  ''){
            dispatch(InsertResultAction.getSearchInspectionType(''));
        }
    },[code,order]);

    return (
        <div className="content">
            <div className="right_con_title">
                <ArticleOutlinedIcon/>
                <p>결과 입력</p>
                <div className="title_barcode">
                    <p>{code !== '' ? `(검체번호 : ${code})` : ""}</p>
                </div>
            </div>
            {InspectionTypeInfo?.data?.length > 0?
                <div>
                    <div className="table_height table_scroll">
                        <table>
                            <tbody>
                            <tr className="table_title">
                                <th>검사이름</th>
                                <th>검사 결과</th>
                                <th>단위</th>
                                <th>비고</th>
                            </tr>
                            {InspectionTypeInfo?.data?.length > 0 && InspectionTypeInfo.data.map((data, index) => {
                                return(
                                <ConclusionItem
                                key={index}
                                ConclusionInfo={ConclusionInfo}
                                orderCode={data.orderCode}
                                inspectionCode={data.inspectionCode}
                                unit={data.unit}
                                registerCode={register}
                                barcode={code}
                                conclusionDataList={conclusionDataList}
                                setConclusionDataList={setConclusionDataList}
                                />
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="footer">
                        <button disabled={disable} className="item_btn" onClick={addResult}>등록</button>
                        <button disabled={!disable} className="item_btn" onClick={updateResult}>수정</button>
                    </div>
                </div>
                :
                <div className="default_position">
                    <DefaultData division="1" />
                </div>}
        </div>
    )
}


export default ConclusionList;
