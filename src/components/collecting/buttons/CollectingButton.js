import React, {useEffect} from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";
import {SAlert} from "./SAlert";

let prescribeCode = {
    prescribeCodeList: [],
    userId: []
}
const CollectingButton = ({dataProvider, gridView})=>{

    let index=0;

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dataProvider]);

    const click = () => {
        index = 0;
        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);

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

        prescribeCode.userId.push(window.localStorage.getItem("userId"));

        dispatch(CollectingActions.putCollectingData(prescribeCode));
        gridView.resetCheckables(true);
        prescribeCode.prescribeCodeList = [];
    }

    return (
            <button className={'collecting-button'} onClick={click}>채혈</button>
    )
}

export default CollectingButton