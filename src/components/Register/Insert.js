import styled from '@emotion/styled';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GATEWAY_URL } from '../../utils/constants/Config';
import Swal from 'sweetalert2';

const Insert = () => {

    const barcode = useSelector((state) => state.Listinfoplus.Listinfoplus.data);

    const barcodeList = [];
    const inspectorId = localStorage.getItem('userId');
    barcode?.length > 0 &&
        barcode.map((data) => {
            let barcode = data.barcode;
            let prescribeCode = data.prescribeCode;
            barcodeList.push({ barcode, prescribeCode, inspectorId });
            return <></>;
        });
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
            title: '접수를 진행 하시겠습니까?',
            text: '접수 버튼을 누르면 접수가 진행 됩니다.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3C9DF6',
            cancelButtonColor: '#d33',
            confirmButtonText: '접수',
            cancelButtonText: '취소',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '접수가 완료 되었습니다.',
                    icon: 'success'
                })
            }
            axios.defaults.headers.common['Authorization'] = `${localStorage.getItem("AccessToken")}`
            if(barcode.length >= 0){
                const statusCode = barcode[0].statusCode
                if(statusCode ==='C'){

                    axios.post(`${GATEWAY_URL}/inspection-service/insert`,{
                        barcodeList:barcodeList
                    })
                    .then((res)=>{}).catch();
                    axios.post(`${GATEWAY_URL}/inspection-service/kafka`,{
                        barcodeList:barcodeList[0].barcode
                    }).then((res)=>{console.log(barcodeList[0].barcode)}).catch();
                }
            }
        }).catch((error)=>({
            error:error = Toast.fire({icon: 'error',title: '접수가 실패하였습니다.'})
        }));
    };
    return (
        <InsertButton className='insert' onClick={testFuc}>
            접수하기
        </InsertButton>
    );
};
export default Insert;

const InsertButton = styled.button`
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
