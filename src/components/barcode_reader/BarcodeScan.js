import React, {useEffect, useState} from 'react'
import BarcodeScanModal from "./modal";

const BarcodeScan= ({barcode,setModal,setBarcode, modal, buttonForPatientInfo})=>{
    const [scanning, setScanning] = useState(false);
    const openModal = ()=> {
        setModal((prevState)=> !prevState);
    }
    return(
        <>
        <button className={'patient-input-btn'} onClick={openModal}>바코드 스캔</button>
        {modal?<BarcodeScanModal setBarcode={setBarcode}
                                 setModal={setModal}
                                 scanning={scanning}
                                 setScanning={setScanning}
                                 buttonForPatientInfo={buttonForPatientInfo}/>:''}
        </>
    )
}

export default BarcodeScan