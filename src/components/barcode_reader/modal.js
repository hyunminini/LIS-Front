import React, {useEffect} from "react"
import styled from "styled-components";
import { BiBarcode } from "react-icons/bi";
import CloseIcon from '@mui/icons-material/Close';
import Scan from "./q2-scanner";

const BarcodeScanModal = ({setBarcode, setModal, scanning, setScanning,buttonForPatientInfo}) => {

    const click = ()=>{
        setModal(false);
        setScanning(!scanning);
    }

    useEffect(() => {
        setScanning(!scanning);
    },[]);


    return (
        <BarcodeModalStyle className={"barcodeModal"}>
            <ModalHead>
                <TitleDiv>
                    <BiBarcode/>
                    <TitleText>바코드 스캔</TitleText>
                </TitleDiv>
                <CloseButton>
                    <CloseIcon onClick={click}/>
                </CloseButton>
            </ModalHead>
            <ReprintTable>
                <Scan scanning={scanning} buttonForPatientInfo={buttonForPatientInfo}/>
            </ReprintTable>
        </BarcodeModalStyle>
    )
}

const BarcodeModalStyle = styled.div`
  position: absolute;
  left: 40%;
  top: 30%;
  height: 400px;
  width: 550px;
  transform: translate(-50%, -50%);
  z-index: 900;
  padding: 5px 10px 10px 10px;
  background-color: white;
  border : 1px solid #CCCCCC;
  border-radius: 15px;
`

const ReprintTable = styled.div`
  margin-top: 10px;
  justify-content: center;
  width: 100%;
  height: 100%;
`


const ModalHead = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    padding-bottom: 5px;
    border-bottom: 1px solid #CCCCCC;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`

const TitleText = styled.h2`
  margin-left: 5px;
  font-size: 16px;
  padding-top: 3px;
`

const CloseButton = styled.div`
  &:hover{
    cursor: pointer;
  }
`

export default BarcodeScanModal