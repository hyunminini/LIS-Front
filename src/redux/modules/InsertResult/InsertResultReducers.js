import Types from "../../ActionConstants";

const initialState ={
    RegisterInfo:{
        loading: false,
        data:{
            registerCode:'',
            inspectorId:'',
            barcode:'',
            registerDt:'',
            orderCode:'',
            resultNo:'',
            statusCode:'',
            prescribeCode:''
        }
    },

    InspectionTypeInfo:{
        loading: false,
        data:{
            inspectionCode:'',
            orderCode:'',
            inspectionName:'',
            unit:'',
            baseline:''
        }
    },

    ConclusionInfo:{
        loading: false,
        data:''
    },

    MessageInfo:{
        loading: false,
        data:{
            barcode:'',
            orderCode:''
        },
    },

    UnregisteredInfo:{
        loading: false,
        data:{
            barcode:'',
            registerDt:'',
        }
    },

    UnsuitableStatusInfo:{
        loading: false,
        data:{
            barcode: '',
            prescribeCode: '',
            unsuitableStatusCode: '',
            unsuitableReasonCode: '',
            unsuitableReasonName: '',
            unsuitableReasonText: '',
            unsuitableUpdateDt: ''
        }
    }

}

const reducer = (state=initialState, action) =>{

    switch (action.type){
        case Types.GET_SEARCH_REGISTER:
            return{
                ...state,
                RegisterInfo: {
                    ...state.RegisterInfo,
                    loading: true,
                    data: action.payload  //payload : 불러온 데이터 값
                }
            }

        case Types.GET_SEARCH_REGISTER_SUCCESS:
            return{
                ...state,
                RegisterInfo: {
                    ...state.RegisterInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_REGISTER_FAILURE:
            return {
                ...state,
                RegisterInfo: {
                    ...state.RegisterInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }



        case Types.GET_SEARCH_UNREGISTERED:
            return{
                ...state,
                UnregisteredInfo: {
                    ...state.UnregisteredInfo,
                    loading: true,
                    data: action.payload  //payload : 불러온 데이터 값
                }
            }

        case Types.GET_SEARCH_UNREGISTERED_SUCCESS:
            return{
                ...state,
                UnregisteredInfo: {
                    ...state.UnregisteredInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_UNREGISTERED_FAILURE:
            return {
                ...state,
                UnregisteredInfo: {
                    ...state.UnregisteredInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }

        case Types.GET_SEARCH_INSPECTION:
            return{
                ...state,
                InspectionTypeInfo: {
                    ...state.InspectionTypeInfo,
                    loading: true,
                    data: action.payload  //payload : 불러온 데이터 값
                }
            }

        case Types.GET_SEARCH_INSPECTION_SUCCESS:
            return{
                ...state,
                InspectionTypeInfo: {
                    ...state.InspectionTypeInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_INSPECTION_FAILURE:
            return {
                ...state,
                InspectionTypeInfo: {
                    ...state.InspectionTypeInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }

        case Types.POST_INSERT_CONCLUSION:
            return{
                ...state,
                MessageInfo: {
                    ...state.MessageInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.POST_INSERT_CONCLUSION_SUCCESS:
            return{
                ...state,
                MessageInfo: {
                    ...state.MessageInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.POST_INSERT_CONCLUSION_FAILURE:
            return {
                ...state,
                MessageInfo: {
                    ...state.MessageInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }






        case Types.GET_SEARCH_CONCLUSION:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_CONCLUSION_SUCCESS:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_CONCLUSION_FAILURE:
            return {
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }


        case Types.GET_SEARCH_UNSUITABLE_STATUS:
            return{
                ...state,
                UnsuitableStatusInfo: {
                    ...state.UnsuitableStatusInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_UNSUITABLE_STATUS_SUCCESS:
            return{
                ...state,
                UnsuitableStatusInfo: {
                    ...state.UnsuitableStatusInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_UNSUITABLE_STATUS_FAILURE:
            return {
                ...state,
                UnsuitableStatusInfo: {
                    ...state.UnsuitableStatusInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }


        case Types.PUT_UPDATE_CONCLUSION:
            return{
                ...state,
                MessageInfo: {
                    ...state.MessageInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.PUT_UPDATE_CONCLUSION_SUCCESS:
            return{
                ...state,
                MessageInfo: {
                    ...state.MessageInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.PUT_UPDATE_CONCLUSION_FAILURE:
            return {
                ...state,
                MessageInfo: {
                    ...state.MessageInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }

        default:
            return state;
    }
}

export default reducer;