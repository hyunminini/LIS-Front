import React from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import {ConfirmAlert, SAlert} from "./SAlert";
import Swal from "sweetalert2";

let prescribeCode = {
    prescribeCodeList: [],
    userId: []
}
const CancelBarcodeButton = ({dataProvider,gridView})=>{

    const dispatch = useDispatch();
    let index = 0;
    const click = ()=>{

        gridView.commit();
        const checkedRow = GetCheckedRow(gridView ,dataProvider);

        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        ConfirmAlert().then(result => {

            if (result.isConfirmed) {

                let rows = dataProvider.getJsonRows();

                for (let i = 0; i < rows.length; i++) {
                    if(rows[checkedRow[i]] !== undefined){
                        prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                        index++;
                    }
                }

                prescribeCode.userId.push(window.localStorage.getItem("userId"));
                dispatch(BarcodeActions.forCancelData(prescribeCode));
                gridView.resetCheckables(false);

                prescribeCode.prescribeCodeList = [];
            }
        });
    }
    return (

        <button className={'collecting-button'} onClick={click}>채취취소</button>

    )
}

export default CancelBarcodeButton;