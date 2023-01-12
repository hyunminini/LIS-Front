import Types from "../../ActionConstants";
import {SAlert, SAlertWithBarcode} from "../../../components/collecting/buttons/SAlert";
import Barcode from "../../../components/collecting/barcode/Barcode";

const initialData = {
    barcodeList : {
        loading: false,
        data: {
            barcodeList : {
                barcode: ''
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {

    switch (type) {
        case Types.POST_NEW_BARCODE :
            const newBarcode = {
                ...state,
                barcodeList: {
                    ...state.barcodeList,
                    loading: false,
                    data: payload
                }
            }

            if(payload[0] === 'create barcode successfully!' ){
                SAlertWithBarcode(Barcode(payload[1]),'바코드가 생성되었습니다!','success');
            } else {
                SAlert('바코드가 이미 존재합니다!','','warning');
            }
            return newBarcode;
        case Types.CANCEL_BARCODE :
            const forCancelBarcode = {
                ...state,
                barcodeList : {
                    ...state.barcodeList,
                    loading:false,
                    data: payload
                }
            }

            if(payload === '선택하신 바코드 발급이 취소되었습니다'){
                SAlert(payload, '', 'success');
            }else{
                SAlert('바코드 발급 취소가 실패하였습니다.',
                    '이미 취소된 바코드인지 체크해 주세요!',
                    'warning' )
            }

            return forCancelBarcode;

        case Types.GET_BARCODE :
            const barcode = {
                ...state,
                barcode: {
                    loading: false,
                    data: payload
                }
            }

            return barcode;
        default:
            return state;
    }

}

export default reducer;
