import Types from "../../ActionConstants";

const initialState = {
    sampleInfo: {
        loading: false,
        data: [{
            barcode: '',
            statusName:'',
            barcodeDt:'',
            collectingDt:'',
            vesselCode:'',
            barcodePrinterId:'',
            collectorId:'',
            perscribeCodeId:'',
            cancelBarcodeDt:'',
            cancelCollectingDt:'',
            statusCode:''
        }]
    },
    
    prescribeInfo: {
        loading: false,
        data: {
            prescribeCode: '',
            visitCode: '',
            inspectionCode: '',
            statusCode: '',
            prescribeContents: '',
            prescribeDt: '',
            doctorId: ''
        }
    },

    userInfo: {
        loading: false,
        data: {
            userId: '',
            name: '',
            authority: '',
            userEmail: '',
        }
    },

    oneUserInfo: {
        loading: false,
        data: {
            userId: '',
            name: '',
            authority: '',
        }
    },

    unsuitableSampleInfo: {
        loading: false,
        data: { 
            barcode: '',
            selectedReason:'',
            notifiedId: '',
            notificatorId:'',
            query: '',
        }
    },

    unsuitableReasonInfo: {
        loading: false,
        data: {
            unsuitableReasonCode: '',
            unsuitableReasonName: '',
            unsuitableStatusCode: '',
            unsuitableStatusName: '',
        }
    },
    selectSampleInfo: {
        loading: false,
        data: {
            prescribeCode: ''
        },

    unsuitInfo: {
        loading: false,
        data: {
            unsuitableReasonCode:'',
            notifiedUserId:'',
            notificatorId:'',
            barcode:'',
            prescribeCode:'',
            unsuitableStatusName:'',
            unsuitableReasonName:''
        }
    }

    }
}

const reducer = (state = initialState, { type, payload }) => {

    
    switch (type) {
        case Types.GET_SAMPLE:
            return {
                ...state,
                sampleInfo: {
                    ...state.sampleInfo,
                    loading:true,
                }
            }

        case Types.GET_SAMPLE_SUCCESS:
            
            return {
                ...state,
                sampleInfo: {
                    ...state.sampleInfo,
                    loading: false,
                    data: payload
                }
            }

        case Types.GET_SAMPLE_FAILURE:
            return {
                ...state,
                sampleInfo: {
                    ...state.sampleInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_PRESCRIBE:
            return{
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading:true,
                }
            }
        
        case Types.GET_PRESCRIBE_SUCCESS:
            return {
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.GET_PRESCRIBE_FAILURE:
            return {
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_USERS:
            return{
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading:true,
                }
            }
        
        case Types.GET_USERS_SUCCESS:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.GET_USERS_FAILURE:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }


        case Types.GET_USER:
            return {
                ...state,
                oneUserInfo: {
                    ...state.oneUserInfo,
                    loading: true,
                }
            }

        case Types.GET_USER_SUCCESS:
            return {
                ...state,
                oneUserInfo: {
                    ...state.oneUserInfo,
                    loading: false,
                    data: payload
                }
            }

        case Types.GET_USER_FAILURE:
            return {
                ...state,
                oneUserInfo: {
                    ...state.oneUserInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
        
        case Types.GET_UNSUITABLE_SAMPLE:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableSampleInfo,
                    loading: true
                }
            }

        case Types.GET_UNSUITABLE_SAMPLE_SUCCESS:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.GET_UNSUITABLE_SAMPLE_FAILURE:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.POST_UNSUITABLE_SAMPLE:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableSampleInfo,
                    loading: true
                }
            }

        case Types.POST_UNSUITABLE_SAMPLE_SUCCESS:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: payload
                }
            }
        
        case Types.POST_UNSUITABLE_SAMPLE_FAILURE:
            return {
                ...state,
                unsuitableSampleInfo: {
                    ...state.unsuitableInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_UNSUITABLE_REASON:
            return {
                ...state,
                unsuitableReasonInfo: {
                    ...state.unsuitableReasonInfo,
                    loading: true,
                }
            }
        
        case Types.GET_UNSUITABLE_REASON_SUCCESS:
            return {
                ...state,
                unsuitableReasonInfo: {
                    ...state.unsuitableReasonInfo,
                    loading: false,
                    data: payload
                }
            }

        case Types.GET_UNSUITABLE_REASON_FAILURE:
            return {
                ...state,
                unsuitableReasonInfo: {
                    ...state.unsuitableReasonInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_SELECT_SAMPLE:
            return {
                ...state,
                selectSampleInfo: {
                    ...state.selectSampleInfo,
                    loading: true,
                }
            }
        case Types.GET_SELECT_SAMPLE_SUCCESS:
            return {
                ...state,
                selectSampleInfo: {
                    ...state.selectSampleInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_SELECT_SAMPLE_FAILURE:
            return {
                ...state,
                selectSampleInfo: {
                    ...state.selectSampleInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }

        case Types.GET_UNSUIT_SAMPLE:
            return{
                ...state,
                unsuitInfo: {
                    ...state.unsuitInfo,
                    loading: true
                }
            }

        case Types.GET_UNSUIT_SAMPLE_SUCCESS:
            return {
                ...state,
                unsuitInfo: {
                    ...state.unsuitInfo,
                    loading: false,
                    data: payload
                }
            }

            case Types.GET_UNSUIT_SAMPLE_FAILURE:
                return {
                    ...state,
                    unsuitInfo: {
                        ...state.unsuitInfo,
                        loading: false,
                        data: {
                            error: payload
                        }
                    }
                }
        default:
            return state;
    }
}

export default reducer;