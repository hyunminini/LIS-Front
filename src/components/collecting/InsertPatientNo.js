import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ToastError } from './Toast';
import { ToastContainer } from 'react-toastify';
import BarcodeScan from '../barcode_reader/BarcodeScan';

const InsertPatientNo = ({ buttonForPatientInfo }) => {
    const [patientInfo, setPatientInfo] = useState('');
    const [visitStatus, setVisitStatus] = useState('전체');
    const [searchCon, setSearchCon] = useState('이름');

    const regex = /^[0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z]+$/;

    const setValue = (e) => {
        setPatientInfo(e.target.value);
    };

    const selectBoxValue = () => {
        const visitStatus = document.getElementById('patientStatus');
        setVisitStatus(visitStatus.options[visitStatus.selectedIndex].text);
    };
    const selectSearchCon = () => {
        const condition = document.getElementById('search-status');
        setSearchCon(condition.options[condition.selectedIndex].text);
    };

    const getPatientInfo = () => {
        if (!regex.test(patientInfo) && patientInfo !== '') {
            ToastError('특수문자는 허용되지 않습니다');
        } else {
            buttonForPatientInfo(patientInfo, visitStatus, searchCon);
        }
    };

    const EnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!regex.test(patientInfo) && patientInfo !== '') {
                ToastError('특수문자는 허용되지 않습니다.');
            } else {
                buttonForPatientInfo(patientInfo, visitStatus, searchCon);
            }
        }
    };

    return (
        <div className={'input-patientNumber left-table'}>
            <div className={'content-title'}>
                <SearchOutlinedIcon />
                <h3>조회 조건</h3>
            </div>
            <div className={'input-form'}>
                <select
                    defaultValue={'전체'}
                    id={'patientStatus'}
                    onChange={selectBoxValue}
                >
                    <option value={'전체'}>전체</option>
                    <option value={'입원'}>입원</option>
                    <option value={'외래'}>외래</option>
                    <option value={'응급'}>응급</option>
                </select>
                <select
                    defaultValue={'이름'}
                    id={'search-status'}
                    onChange={selectSearchCon}
                >
                    <option value={'이름'}>이름</option>
                    <option value={'환자번호'}>환자번호</option>
                </select>
                <input
                    type={'text'}
                    className={'patientNo-input'}
                    placeholder={'이름 혹은 환자번호를 입력하세요'}
                    onKeyDown={EnterKeyPress}
                    onChange={setValue}
                />
                <button
                    className={'patient-input-btn'}
                    onClick={getPatientInfo}
                >
                    검색
                </button>
                {/*<BarcodeScan*/}
                {/*    barcode={barcode}*/}
                {/*    setModal={setModal}*/}
                {/*    setBarcode={setBarcode}*/}
                {/*    modal={modal}*/}
                {/*    buttonForPatientInfo={buttonForPatientInfo}/>*/}
            </div>

            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default InsertPatientNo;
