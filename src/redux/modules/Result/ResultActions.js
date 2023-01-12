import Types from '../../ActionConstants';
import * as ResultApi from '../../../api/ResultApi';
import axios from 'axios';
import Swal from 'sweetalert2';

const ResultActions = {
    getDateSearch:
        (patientNo, startDate, endDate, radioDate, orderSelect) =>
        async (dispatch) => {
            dispatch({ type: Types.GET_RESULTS });

            try {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `${localStorage.getItem('AccessToken')}`;
                const result = await ResultApi.getResults(
                    patientNo,
                    startDate,
                    endDate,
                    radioDate,
                    orderSelect,
                );

                if (!result)
                    throw new Error(`Error adding patitent: ${result}`);

                dispatch({
                    type: Types.GET_RESULTS_SUCCESS,
                    payload: result.data,
                });
            } catch (error) {
                dispatch({
                    type: Types.GET_RESULTS_FAILURE,
                    payload: error.toString(),
                });
                if (error.response.status === 401) {
                    Swal.fire({
                        title: '계정이 만료되었습니다.',
                        icon: 'error',
                        confirmButtonColor: '#3C9DF6',
                        confirmButtonText: '확인',
                    }).then((result) => {
                        window.localStorage.removeItem('AccessToken');
                        window.localStorage.removeItem('authority');
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('userId');
                        window.location.href = '/';
                    });
                }
            }
        },

    getNoDateSearch: (text) => async (dispatch) => {
        dispatch({ type: Types.GET_SEARCH_RESULTS });

        try {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${localStorage.getItem('AccessToken')}`;
            const result = await ResultApi.getSearchNoDate(text);
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.GET_SEARCH_RESULTS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULTS_FAILURE,
                payload: error.toString(),
            });
            if (error.response.status === 401) {
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                }).then((result) => {
                    window.localStorage.removeItem('AccessToken');
                    window.localStorage.removeItem('authority');
                    window.localStorage.removeItem('username');
                    window.localStorage.removeItem('userId');
                    window.location.href = '/';
                });
            }
        }
    },

    postSendSms: (to, content) => async (dispatch) => {
        dispatch({ type: Types.POST_RESULT_SMS });

        try {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${localStorage.getItem('AccessToken')}`;
            const result = await ResultApi.postSendMessage(to, content);
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.POST_RESULT_SMS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.POST_RESULT_SMS_FAILURE,
                payload: error.toString(),
            });
            if (error.response.status === 401) {
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                }).then((result) => {
                    window.localStorage.removeItem('AccessToken');
                    window.localStorage.removeItem('authority');
                    window.localStorage.removeItem('username');
                    window.localStorage.removeItem('userId');
                    window.location.href = '/';
                });
            }
        }
    },
    getSmsData: () => async (dispatch) => {
        dispatch({ type: Types.GET_SMSDATA });

        try {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${localStorage.getItem('AccessToken')}`;
            const result = await ResultApi.getSmsData();
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.GET_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_SMSDATA_FAILURE,
                payload: error.toString(),
            });
            if (error.response.status === 401) {
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                }).then((result) => {
                    window.localStorage.removeItem('AccessToken');
                    window.localStorage.removeItem('authority');
                    window.localStorage.removeItem('username');
                    window.localStorage.removeItem('userId');
                    window.location.href = '/';
                });
            }
        }
    },
    postSmsData: (smsTitle, smsContent) => async (dispatch) => {
        dispatch({ type: Types.POST_SMSDATA });

        try {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${localStorage.getItem('AccessToken')}`;
            const result = await ResultApi.postSmsData(smsTitle, smsContent);
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.POST_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.POST_SMSDATA_FAILURE,
                payload: error.toString(),
            });
            if (error.response.status === 401) {
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                }).then((result) => {
                    window.localStorage.removeItem('AccessToken');
                    window.localStorage.removeItem('authority');
                    window.localStorage.removeItem('username');
                    window.localStorage.removeItem('userId');
                    window.location.href = '/';
                });
            }
        }
    },
    deleteSmsData: (smsNo) => async (dispatch) => {
        dispatch({ type: Types.DELETE_SMSDATA });

        try {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${localStorage.getItem('AccessToken')}`;
            const result = await ResultApi.deleteSmsData(smsNo);
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.DELETE_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.DELETE_SMSDATA_FAILURE,
                payload: error.toString(),
            });
            if (error.response.status === 401) {
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                }).then((result) => {
                    window.localStorage.removeItem('AccessToken');
                    window.localStorage.removeItem('authority');
                    window.localStorage.removeItem('username');
                    window.localStorage.removeItem('userId');
                    window.location.href = '/';
                });
            }
        }
    },
    editSmsData: (smsNo, smsTitle, smsContent) => async (dispatch) => {
        dispatch({ type: Types.PUT_SMSDATA });

        try {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${localStorage.getItem('AccessToken')}`;
            const result = await ResultApi.editSmsData(
                smsNo,
                smsTitle,
                smsContent,
            );
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.PUT_SMSDATA_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.PUT_SMSDATA_FAILURE,
                payload: error.toString(),
            });
            if (error.response.status === 401) {
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                }).then((result) => {
                    window.localStorage.removeItem('AccessToken');
                    window.localStorage.removeItem('authority');
                    window.localStorage.removeItem('username');
                    window.localStorage.removeItem('userId');
                    window.location.href = '/';
                });
            }
        }
    },
};

export default ResultActions;
