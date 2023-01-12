import React from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";
import {ConfirmAlert, SAlert} from "./SAlert";

let prescribeCode = {
    prescribeCodeList: [],
    userId: []
}
const CancelCollectingButton = ({dataProvider, gridView}) => {
    const dispatch = useDispatch();
    let index = 0;

    const click = async () => {
        gridView.commit();
        const checkedRow = GetCheckedRow(gridView, dataProvider);

        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        ConfirmAlert().then(result => {
            if (result.isConfirmed) {

                let rows = dataProvider.getJsonRows();

                for (let i = 0; i < rows.length; i++) {
                    if (rows[checkedRow[i]] !== undefined) {
                        prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                        index++;
                    }
                }

                prescribeCode.userId.push(window.localStorage.getItem("userId"));

                dispatch(CollectingActions.cancelCollecting(prescribeCode));
                gridView.resetCheckables(false);
            }
        })

        prescribeCode.prescribeCodeList = [];
    }
    return (
        <button className={'collecting-button'} onClick={click}>채혈취소</button>
    )
}

export default CancelCollectingButton