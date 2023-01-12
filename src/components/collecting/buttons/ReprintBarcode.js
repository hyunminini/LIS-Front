import GetCheckedRow from "./GetCheckRow";
import {SAlert} from "./SAlert";
import {useDispatch} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import React from "react";

const prescribeCode = {
    prescribeCodeList: []
}
const ReprintBarcode = ({dataProvider,girdView, setModal}) => {
    const dispatch = useDispatch();
    let index=0;


    const click = async () => {
        index=0;
        girdView.commit();
        let checkedRow = GetCheckedRow(girdView,dataProvider);

        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < checkedRow.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                index++;
            }
        }

        let newArray = [];

        for (let i = 0; i < prescribeCode.prescribeCodeList.length; i++) {
            newArray.push(prescribeCode.prescribeCodeList[i]*1);
        }

        await dispatch(BarcodeActions.getBarcode(newArray));

        setModal(true);

        prescribeCode.prescribeCodeList = [];
    }

    return (
        <>
        <button className={'collecting-button'} onClick={click}>바코드 재발급</button>
        </>)
}

export default ReprintBarcode