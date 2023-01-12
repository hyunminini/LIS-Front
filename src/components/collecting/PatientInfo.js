import React, {useEffect} from 'react'
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import DefaultData from "../result/DefaultData";
import VisitActions from "../../redux/modules/Collecting/VisitActions";
import {useDispatch} from "react-redux";

const PatientInfo = ({info}) => {
    const dispatch = useDispatch();
    const buttonForVisitInfo = (patientNo)=> {
        dispatch(VisitActions.getVisitData(patientNo));
    }

    useEffect(() => {
        const ul = document.querySelectorAll(".patient-btn");
        for (let i = 0; i < ul.length; i++) {
            ul[i].addEventListener('click', () => {
                buttonForVisitInfo(ul[i].getAttribute('data-key'));
            });
        }
    }, [info]);


    return (
        <div className={'patient-rows'}>
            <div className={'content-title'}>
                <SickOutlinedIcon/><h3>환자 정보</h3>
            </div>
            {info.length > 0 ?
                <div className={'table patient-info'}>
                    <ul className={'row patient-table'}>
                        <li className={'fl patient-title'}>환자번호</li>
                        <li className={'fl patient-title'}>이름</li>
                        <li className={'fl patient-title'}>나이</li>
                        <li className={'fl patient-title'}>성별</li>
                        <li className={'fl patient-title regi-no'}>주민번호</li>
                        <li className={'fl patient-title'}>키</li>
                        <li className={'fl patient-title'}>몸무게</li>
                        <li className={'fl patient-title'}>혈액형</li>
                        <li className={'fl patient-title memo'}>특이사항</li>
                    </ul>
                    {info.map((data,index) => {
                        return (
                            <ul className={'patient-table patient-btn'} key={index} data-key={data.PATIENT_NO}>
                                <li className={'fl patient-data'}>{data.PATIENT_NO}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_NAME}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_AGE}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_GENDER}</li>
                                <li className={'fl patient-data regi-no'}>{data.PATIENT_RESIDENT_NUMBER}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_HEIGHT}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_WEIGHT}</li>
                                <li className={'fl patient-data'}>{data.PATIENT_BLOOD_TYPE}</li>
                                <li className={'fl patient-data memo'}>{data.PATIENT_MEMO}</li>
                            </ul>)
                    })
                    }
                </div>
                : <DefaultData/>}
        </div>


    )
}
// <li className={'fl first table-title'}>이름</li>
// {/*<li className={'fl first-result'}>{info === [] || info === undefined ?*/}
// {/*    " ": info}</li>*/}
// <li className={'fl first-result'}>{info !== [] ?
//     info[0]?.patientName : ''}</li>
// <li className={'fl second table-title'}>주민번호</li>
// <li className={'fl second-result'}>{info !== [] ? info[0]?.patientResidentNumber : ''}</li>
// <li className={'fl third table-title'}>키/몸무게</li>
// <li className={'fl third-result'}>{info !== [] ? info[0]?.patientHeight : ''}
//     {info.length !== 0 ? "/" : ''}
//     {info !== [] ? info[0]?.patientWeight : ''}</li>
// </ul>
// <ul className={'row patient-table'}>
//     <li className={'fl first table-title'}>혈액형</li>
//     <li className={'fl first-result'}>{info !== [] ? info[0]?.patientBloodType : ''}</li>
//     <li className={'fl second table-title'}>나이/성별</li>
//     <li className={'fl second-result'}>{info !== [] ? info[0]?.patientAge : ''}
//         {info.length !== 0 ? "/" : ''}
//         {info !== [] ? info[0]?.patientGender : ''}</li>
//     <li className={'fl third table-title'}>전화번호</li>
//     <li className={'fl third-result'}>{info !== [] ? info[0]?.patientPhoneNumber : ''}</li>
// </ul>
// <ul className={'row patient-table'}>
//     <li className={'fl first table-title'}>주소</li>
//     <li className={'fl address-result'}>{info[0]?.patientAddress}</li>
export default PatientInfo;