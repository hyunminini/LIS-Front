/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react'
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import "../../styles/collecting.scss";
import 'realgrid/dist/realgrid-style.css';
import {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./realgrid-data";
import BarcodingButton from "./buttons/BarcodingButton";
import CancelCollectingButton from "./buttons/CancelCollectingButton";
import CollectingButton from "./buttons/CollectingButton";
import CancelBarcodeButton from "./buttons/CancelBarcodeButton";
import DefaultData from "../result/DefaultData";
import ReprintBarcode from "./buttons/ReprintBarcode";

let options = {
    summaryMode: 'aggregate',
    display: {
        syncGridHeight: "always",
        maxRowHeight: 30,
    },
    grouping: {
        enabled: false
    }
};



const PrescribeInfo = ({prescribeInfo, visitNo, initPrescribeCodeInfo,setModal}) => {

    const init = useRef(null);
    const [dataProvider, SetDataProvider] = useState();
    const [gridView, setGridView] = useState();
    let dp;
    let gv;

    useEffect(() => {
        if (prescribeInfo.length > 0) {
            const container = init.current;
            dp = new LocalDataProvider(true);
            gv = new GridView(container);

            PrescribeInfoItem(gv, dp, prescribeInfo);

            SetDataProvider(dp);
            setGridView(gv);

            return () => {
                dp.clearRows()
                gv.destroy()
                dp.destroy()
            }
        }
    }, [prescribeInfo]);

    return (
        <div className={'patient-order right'}>
            <div className={'content-title'}>
                <LocalHospitalOutlinedIcon/>
                <h3>처방 정보</h3>
                {prescribeInfo.length > 0 ? <div className={'buttons'}>
                    <BarcodingButton dataProvider={dataProvider}
                                     gridView={gridView}
                                     visitNo={visitNo}
                                     initPrescribeInfo={initPrescribeCodeInfo}/>
                    <CancelBarcodeButton dataProvider={dataProvider} gridView={gridView} visitNo={visitNo}/>
                    <CollectingButton dataProvider={dataProvider} gridView={gridView} />
                    <CancelCollectingButton dataProvider={dataProvider} gridView={gridView} visitNo={visitNo}/>
                    <ReprintBarcode dataProvider={dataProvider} girdView={gridView} setModal={setModal}/>
                </div>: ''}
            </div>
            {prescribeInfo.length > 0 ? <div
                style={{height: '5%', width: '85%'}}
                id={'prescribeInfo-info'} ref={init}>
            </div> : <DefaultData/>}
        </div>
    )
}



const PrescribeInfoItem = (gv, dp, prescribeInfo) => {

    gv.setDataSource(dp)
    dp.setFields(fields);
    gv.setColumns(columns);
    dp.setRows(prescribeInfo);
    // gv.setCheckableExpression("values['Bool'] <> 'false'", true);
    // gv.setFixedOptions({
    //     colCount: 1
    // });


    gv.checkBar.mergeRule = "value['classification_code']";
    gv.checkBar.width = 30;
    gv.setOptions(options);
    gv.displayOptions.fitStyle = "even";

    gv.editOptions.commitByCell = true
    gv.editOptions.commitWhenLeave = true

    gv.footer.visible = false;

    gv.setCheckBar({
        showAll: false
    });
    gv.setStateBar({
        visible: false
    });
    gv.setRowIndicator({
        visible: false
    });
}

export default PrescribeInfo;