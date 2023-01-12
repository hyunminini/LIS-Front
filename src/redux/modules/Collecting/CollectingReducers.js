import Types from "../../ActionConstants";
import {SAlert} from "../../../components/collecting/buttons/SAlert";

const initialData = {
    result : {
        loading: false,
        data: ''

    }
}

const reducer = (state = initialData, {type, payload}) => {
    switch (type){
        case Types.PUT_COLLECTING_DATA : {
            const barcode = {
                ...state,
                barcodeList : {
                    ...state.barcodeList,
                    loading: false,
                    data : payload
                }
            }

            if(payload === 'update success'){
                SAlert('채혈등록이 완료되었습니다','','success');
            }else if(payload === 'update fail'){
                SAlert('채혈등록이 실패하였습니다','','error');
            }else {
                SAlert('채혈정보가 이미 존재합니다','','warning');
            }
            return barcode;
        }

        case Types.CANCEL_COLLECTING : {
            const barcode = {
                ...state,
                barcodeList : {
                    ...state.barcodeList,
                    loading: false,
                    data : payload
                }
            }
            if(payload.data === "채혈이 취소되었습니다."){
                SAlert('채혈이 취소되었습니다!','','success');
            } else {
                SAlert('채혈이 취소가 실패 하였습니다!','','error');
            }
            return barcode;
        }
        default:
            return state;

    }
}

export default reducer;