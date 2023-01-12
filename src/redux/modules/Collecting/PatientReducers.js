import Types from "../../ActionConstants";
import {ToastError} from "../../../components/collecting/Toast";


const initialData = {
    patientInfo: {
        loading: false,
        data: {
            patientInfo: {
                patientNo: '',
                patientName: '',
                patientAge: '',
                patientBloodType: '',
                patientHeight: '',
                patientWeight: '',
                patientAddress: '',
                patientPhoneNumber: '',
                patientResidentNumber: '',
                patientGender: '',
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {
    switch (type) {
        case Types.GET_PATIENT_INFO:
            const tmp = {
                ...state, // TODO 3
                patientInfo: {
                    ...state.patientInfo,
                    loading: false,
                    data: payload
                }
            };
            if(payload.length === 0) {
                ToastError("환자가 존재하지 않습니다!");
            }
            return tmp;
        default:
            return state;
    }


}

export default reducer;