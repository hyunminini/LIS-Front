import Types from "../../ActionConstants";
import * as RegisterApi from "../../../api/RegisterApi";
import Swal from "sweetalert2";
import axios from "axios";
const RegisterActions ={

    getDateSearch: (barcode) => async (dispatch) => {
        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
        dispatch({ type: Types.GET_SEARCH_RESULT_PATIENT });

        try {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            const register = await RegisterApi.getPrescribe(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`);

            if (register.data.length === 0){
                Toast.fire({
                    icon: 'error',
                    title: '접수가 불가능한 바코드 입니다.',
                    text:'바코드 정보가 다릅니다.'
                });
            }
            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });
            Toast.fire({
                icon: 'warning',
                title: '바코드를 확인해주세요',
                text:'바코드 정보가 다릅니다.'
            });
            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_FAILURE,
                payload: error.toString()
            })
            
            if(error.response.status===401){
                Swal.fire({
                    title: '계정이 만료되었습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인'
                }).then((result) => {
                    window.localStorage.removeItem("AccessToken");
                    window.localStorage.removeItem("authority");
                    window.localStorage.removeItem("username");
                    window.localStorage.removeItem("userId");
                    window.location.href="/"
                });
            }
        }
    },
    getDateSearchd: (barcode) => async (dispatch) => {
        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
        dispatch({ type: Types.GET_SEARCH_RESULT_COLLET });

        try {
            const register = await RegisterApi.getCollect(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`); 


            dispatch({
                type: Types.GET_SEARCH_RESULT_COLLET_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULT_COLLET_FAILURE,
                payload: error.toString()
            })
        }
    }

}
export default RegisterActions;