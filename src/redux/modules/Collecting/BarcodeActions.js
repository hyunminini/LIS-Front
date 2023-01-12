import * as CollectingApi from "../../../api/CollectingApi"
import Types from "../../ActionConstants";

const BarcodeActions = {
    postPrescribeData: (prescribeCodes)=> async (dispatch) =>{
        try {
            const result = await CollectingApi.newBarcodeInfo(prescribeCodes);

            if(!result) throw new Error("can not find prescribe");

            console.log("result--------------");
            console.log(result.data);
            dispatch({
                type: Types.POST_NEW_BARCODE,
                payload: result.data
            })
        }catch (error){

        }
    },
    forCancelData : (prescribeCodes) => async (dispatch) => {
        try {
            const result = await CollectingApi.cancelBarcode(prescribeCodes);
            if(!result) throw new Error("can not find barcode");

            dispatch({
                type: Types.CANCEL_BARCODE,
                payload: result.data
            })
        }catch (error) {

        }
    },
    getBarcode : (prescribeCodes) => async (dispatch) => {
        try {
            const result = await CollectingApi.getBarcode(prescribeCodes);
            if(!result) throw new Error("can not find barcode");

            dispatch({
                type: Types.GET_BARCODE,
                payload: result.data
            })
        }catch (error) {

        }
    }
}

export default BarcodeActions