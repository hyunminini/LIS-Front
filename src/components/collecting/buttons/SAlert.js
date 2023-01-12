import Swal from "sweetalert2";

export const SAlert = (text, smText, icon) =>{
    Swal.fire(
        text,
        smText,
        icon
    )
}

export const SAlertWithBarcode = (barcode, text, icon) => {
    Swal.fire({
        imageUrl: barcode,
        imageHeight: 200,
        imageAlt: 'barcode'
    },
        text,
        '',
        icon
    )
}

export const ConfirmAlert = () => {
    return Swal.fire({
        title: '취소 하시겠습니까?',
        text: '다시 되돌릴 수 없습니다. 신중하세요.',
        icon: 'warning',

        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
        cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
        confirmButtonText: '승인', // confirm 버튼 텍스트 지정
        cancelButtonText: '취소', // cancel 버튼 텍스트 지정

        reverseButtons: true, // 버튼 순서 거꾸로

    });
}