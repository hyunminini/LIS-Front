import React from 'react';
import SmsDataItem from './SmsDataItem';

const SmsDataList = ({
    data,
    close,
    selectSmsData,
    setSelectSmsData,
    selectSmsDataHandler,
}) => {
    return (
        <>
            <SmsDataItem
                data={data}
                close={close}
                selectSmsData={selectSmsData}
                setSelectSmsData={setSelectSmsData}
                selectSmsDataHandler={selectSmsDataHandler}
            />
        </>
    );
};

export default SmsDataList;
