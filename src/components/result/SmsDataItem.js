import React from 'react';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import { useSelector } from 'react-redux';

const SmsDataItem = ({ selectSmsData, selectSmsDataHandler }) => {
    const { resultInfo } = useSelector((state) => state.ResultInfo);

    return (
        <div className='phone-content'>
            <p>
                <ForwardToInboxSharpIcon />
                SMS 내용입력
            </p>
            <textarea
                className='message'
                value={selectSmsData}
                onChange={selectSmsDataHandler}
                placeholder='문자 내용을 선택해주세요.'
            />

            <footer>
                <p className='phone-text patient-no'>
                    환자 번호: {resultInfo.data[0].patientNo}
                </p>
                <p className='phone-text patient-name'>
                    수신 인: {resultInfo.data[0].patientName} 님
                </p>
                <p className='phone-text phone-num'>
                    수신 번호: {resultInfo.data[0].patientPhoneNumber}
                </p>
            </footer>
        </div>
    );
};

export default SmsDataItem;
