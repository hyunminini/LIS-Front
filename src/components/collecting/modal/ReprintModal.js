import React, {useEffect} from "react"
import Barcode from "../barcode/Barcode";
import styled from "styled-components";
import { BiBarcode } from "react-icons/bi";
import CloseIcon from '@mui/icons-material/Close';

const ReprintModal = ({barcode, setModal}) => {

    useEffect(() => {
        console.log('barcode');
        console.log(Barcode(barcode[0].BARCODE));
    }, [barcode]);

    const click = ()=>{
        setModal(false);
    }

    return (
        <ModalStyle className={"barcodeModal"}>
            <ModalHead>
                <TitleDiv>
                <BiBarcode/>
                <TitleText>바코드 재출력</TitleText>
                </TitleDiv>
                <CloseButton>
            <CloseIcon onClick={click}/>
                </CloseButton>
            </ModalHead>
            <ReprintTable>
                {barcode.length>0?barcode.map((data)=> (
                    <Row>
                        <PrescribeList>처방코드 : {data.PRESCRIBE_CODE}</PrescribeList>
                    <BarcodeImage className={"barcodeModal prescribe-code"}>
                        <img src={Barcode(data.BARCODE)} alt={"barcode"}/>
                    </BarcodeImage>

                    </Row>
                )):''}
            </ReprintTable>
        </ModalStyle>
    )
}

const ModalStyle = styled.div`
  position: absolute;
  left: 25%;
  top: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 900;
  width: 350px;
  padding: 5px 10px 10px 10px;
  background-color: white;
  border : 1px solid #CCCCCC;
  border-radius: 15px;
`

const ReprintTable = styled.div`
  margin-top: 10px;
  justify-content: center;
  width: 100%;
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

const Row = styled.ul`
  width:100%;
`

const BarcodeImage = styled.li`
  border: 1px solid #CCCCCC;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  float:none;
  img { padding-top : 5px; }
`


const PrescribeList = styled.li`
  padding: 3px;
  background-color: #f7f7f7;
  border: 1px solid #CCCCCC;
  border-bottom: none;
`

const CloseButton = styled.div`
  &:hover{
    cursor: pointer;
  }
`

export default ReprintModal