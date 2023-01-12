import styled from "@emotion/styled";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { GATEWAY_URL } from "../../utils/constants/Config";

const Cancellation = ()=>{
    const test = useSelector((state) => state.Listinfoplus.Listinfoplus.data);
    const cancelRegisterId = localStorage.getItem('userId');
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
    const testFuc = () => {
        Swal.fire({
            title: '접수를 취소 하시겠습니까?',
            text: '확인 버튼을 누르면 접수가 취소 됩니다.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3C9DF6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '접수가 취소 되었습니다.',
                    icon: 'success'
                })
            }
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            if(test.length >= 0){
                const barcode = test[0].barcode
                const statusCode = test[0].statusCode
                if(statusCode === 'D'){
                    axios.post(`${GATEWAY_URL}/inspection-service/cancellation`,{
                        cancelRegisterId:cancelRegisterId,
                        barcode:barcode
                    })
                    .then((res)=>{}).catch();
                    axios.post(`${GATEWAY_URL}/inspection-service/cancellationKafka`,{
                        barcode:barcode
                    }).then((res)=>{}).catch();
                };
            };
        }).catch((error)=>({
            error:error = Toast.fire({icon: 'error',title: '접수취소가 실패하였습니다.'})
        }));
    };

    return(<CancellationButton onClick={testFuc}>접수취소</CancellationButton>);
}
const CancellationButton = styled.button`
    border: 1px solid #3c9df6;
    background: #fff;
    border-radius: 5px;
    color: #3c9df6;
    font-weight: bold;
    padding: 3px 13px 3px 13px;
    margin-left: 1em;
    cursor: pointer;
    &:hover {
        background: #3c9df6;
        color: #fff;
        transition: 0.5s;
        font-weight: bold;
    }
    &:active {
        background: #217bce;
        border: 1px solid #217bce;
        transition: 0.5s;
    }
`;
export default Cancellation;