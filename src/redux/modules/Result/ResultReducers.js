import Types from '../../ActionConstants';

const initialState = {
    resultInfo: {
        loading: false,
        data: {
            resultNo: '',
            patientNo: '',
            patientName: '',
            patientPhoneNumber: '',
            orderCode: '',
            registerDt: '',
            sampleName: '',
            prescribeDt: '',
            inspectionName: '',
            figures: '',
            baseline: '',
            unit: '',
            note: '',
            sampleNote: '',
        },
    },
    smsInfo: {
        loading: false,
        data: {
            to: '',
            content: '',
        },
    },
    smsDataInfo: {
        loading: false,
        data: {
            smsNo: '',
            smsTitle: '',
            smsContent: '',
        },
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_SEARCH_RESULTS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: true,
                },
            };

        case Types.GET_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: payload,
                },
            };

        case Types.GET_SEARCH_RESULTS_FAILURE:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };

        case Types.GET_RESULTS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: true,
                },
            };

        case Types.GET_RESULTS_SUCCESS:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: payload,
                },
            };

        case Types.GET_RESULTS_FAILURE:
            return {
                ...state,
                resultInfo: {
                    ...state.resultInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };
        case Types.POST_RESULT_SMS:
            return {
                ...state,
                smsInfo: {
                    ...state.smsInfo,
                    loading: true,
                },
            };

        case Types.POST_RESULT_SMS_SUCCESS:
            return {
                ...state,
                smsInfo: {
                    ...state.smsInfo,
                    loading: false,
                    data: payload,
                },
            };

        case Types.POST_RESULT_SMS_FAILURE:
            return {
                ...state,
                smsInfo: {
                    ...state.smsInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };

        case Types.GET_SMSDATA:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: true,
                },
            };

        case Types.GET_SMSDATA_SUCCESS:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                    data: payload,
                },
            };

        case Types.GET_SMSDATA_FAILURE:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };
        case Types.POST_SMSDATA:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: true,
                },
            };
        case Types.POST_SMSDATA_SUCCESS:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                },
            };
        case Types.POST_SMSDATA_FAILURE:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };
        case Types.DELETE_SMSDATA:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: true,
                },
            };
        case Types.DELETE_SMSDATA_SUCCESS:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                },
            };
        case Types.DELETE_SMSDATA_FAILURE:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };
        case Types.PUT_SMSDATA:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: true,
                },
            };
        case Types.PUT_SMSDATA_SUCCESS:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                },
            };
        case Types.PUT_SMSDATA_FAILURE:
            return {
                ...state,
                smsDataInfo: {
                    ...state.smsDataInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;
