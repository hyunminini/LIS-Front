import React, {useEffect, useState} from 'react';

import "../../styles/insertResult/insertResult.scss";
import CuModal from "./modal/CuModal";
import SuModal from "./modal/SuModal";
import ModalSecond from "./modal/ModalSecond";

const RegisterItem = ({data, onConclusion,MessageInfo,UnsuitableStatusInfo}) => {

    let messageBarcode;
    let messageOrderCode;
    let resultCheck;
    let suCheck = '-';
    let cuCheck = '-';

    const [cuModal,setCuModal]=useState(false);
    const [suModal,setSuModal]=useState(false);

    if(MessageInfo.data !== undefined) {
        messageBarcode = MessageInfo.data[0]
        messageOrderCode = MessageInfo.data[1]
    };

    if(messageBarcode === data.barcode.toString() && messageOrderCode===data.orderCode){
        resultCheck='O';
    } else if(data.statusCode==='M'){
        resultCheck='O';
    } else{
        resultCheck='-';
    };

    if(UnsuitableStatusInfo?.data?.length >0 && UnsuitableStatusInfo.data.map(item=>{
        if(data.prescribeCode === item.prescribeCode){
            if(item.unsuitableStatusCode==="CU"){
                cuCheck='상세보기'
            }
            if(item.unsuitableStatusCode==="SU"){
                suCheck='상세보기'
            }
        }
        return null
    }));

    const onClick =(e)=>{
        e.target.classList.remove('test')
        onConclusion(data.barcode, data.registerCode, data.orderCode);

    }

    const onCu=(e)=>{
        if(cuCheck === '상세보기'){
            setCuModal(!cuModal)
        } else{
            onClick()
        }
        e.target.classList.remove('test')
    }

    const onSu=(e)=>{
        if(suCheck === '상세보기'){
            setSuModal(!suModal)
        } else{
            onClick()
        }
    }

    useEffect(()=>{
        const test = document.querySelectorAll('.changeColor');
        for(let i=0; i < test.length; i++)
        {
            if (cuModal === true || suModal === true) {
                test[i].classList.remove('test');
            } else if (suModal === false || cuModal === false) {
                test[i].classList.add('test');
            }
        }
    },[cuModal, suModal])

    return (
        <tr className="changeColor test" >
            <td onClick={onClick}>{data.patientNo}</td>
            <td onClick={onClick}>{data.barcode}</td>
            <td onClick={onClick}>{data.orderCode}</td>
            <td onClick={onCu}>{cuCheck}
                {cuModal && (
                    <ModalSecond closeModal={() => setCuModal(!cuModal)}>
                        <CuModal UnsuitableStatusInfo={UnsuitableStatusInfo} pre={data.prescribeCode}/>
                    </ModalSecond>
                )}</td>
            <td onClick={onSu}>{suCheck}
                {suModal && (
                <ModalSecond closeModal={() => setSuModal(!suModal)}>
                    <SuModal UnsuitableStatusInfo={UnsuitableStatusInfo} pre={data.prescribeCode}/>
                </ModalSecond>
            )}</td>
            <td onClick={onClick}>{resultCheck}</td>
            <td onClick={onClick}>{data.registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

