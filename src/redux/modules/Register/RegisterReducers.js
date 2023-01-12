import Types from "../../ActionConstants";
const initialState = {
    Listinfo: {
        loading: false,
        data: {
            patientName:'',
            patientResidentNumber: '',
            patientAge: '',
            patientGender: '',
            patientBloodType: '',
            patientHeight: '',
            patientWeight: '',
            patientPhoneNumber: '',
            patientAddress: '',
            unsuitableStatusCode: '',
            statusCode:'',
            cancelBarcodeDt:'',
            cancelCollectingDt:'',
        }
    },
    Listinfoplus: {
        loading: false,
        data: {
            patientNo:'',
            barcode:'',
            collectingDt: '',
            collectorId: '',
            prescribeCode: '',
            orderCode:'',
            vesselCode:'',
            sampleCode:'',
            statusCode:'',
            cancelBarcodeDt:'',
            cancelCollectingDt:'',
        }
    },
}

const RegisterReducers =(state = initialState, { type, payload })=>{
    switch (type) {
        case Types.GET_SEARCH_RESULT_PATIENT:
            return {
                ...state,
                Listinfo: {
                    ...state.Listinfo,
                    loading: true,
                }
            }

        case Types.GET_SEARCH_RESULT_PATIENT_SUCCESS:
            return {
                ...state,
                Listinfo: {
                    ...state.Listinfo,
                    loading: false, 
                    data: payload 
                }
            }

        case Types.GET_SEARCH_RESULT_PATIENT_FAILURE:
            return {
                ...state,
                Listinfo: {
                    ...state.Listinfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_SEARCH_RESULT_COLLET:
                return {
                    ...state,
                    Listinfoplus: {
                        ...state.Listinfoplus,
                        loading: true,
                    }
                }

        case Types.GET_SEARCH_RESULT_COLLET_SUCCESS:
                return {
                    ...state,
                    Listinfoplus: {
                        ...state.Listinfoplus,
                        loading: false, 
                        data: payload
                    }
                }

        case Types.GET_SEARCH_RESULT_COLLET_FAILURE:
                return {
                    ...state,
                    Listinfoplus: {
                        ...state.Listinfoplus,
                        loading: false,
                        data: {
                            error: payload
                        }
                    }
                }
        default:
            return state;
    };
}
export default RegisterReducers;