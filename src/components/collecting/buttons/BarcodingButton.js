import React from "react";
import {useDispatch} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import GetCheckedRow from "./GetCheckRow";
import {SAlert} from "./SAlert";
// import PrescribeActions from "../../../redux/modules/Collecting/PrescribeActions";

let prescribeCode = {
    prescribeCodeList: [],
    userId: []
}

const BarcodingButton = ({dataProvider, gridView, visitNo, initPrescribeInfo}) => {
    const dispatch = useDispatch();
    let index;
    const click = async () => {
        index = 0;
        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);


        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        let rows = dataProvider.getJsonRows();
        console.log(rows);

        for (let i = 0; i < rows.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                index++;
            }
        }

        prescribeCode.userId.push(window.localStorage.getItem("userId"));

       await dispatch(BarcodeActions.postPrescribeData(prescribeCode));
        gridView.resetCheckables(true);
        prescribeCode.prescribeCodeList = [];
        initPrescribeInfo();

        // if(barcodeInfo.data[0] === '')

        // dispatch(PrescribeActions.getPrescribeData(visitNo));
    }

    return (
        <button className={'collecting-button'} onClick={click}>채취</button>
    )
}

export default BarcodingButton;