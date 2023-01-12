import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import ResultActions from '../../redux/modules/Result/ResultActions';
import Swal from 'sweetalert2';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import SmsItemList from './SmsItemList';

const SmsSelectText = ({
    selectSmsData,
    selectSmsDataHandler,
    open,
    editModalOpen,
    openEditModal,
    closeEditModal,
    smsDataInfo,
    editDataFilter,
    setEditDataFilter,
    setEditDataNo,
    editFilterNo,
    editDataNo,
    setEditTitle,
    setEditContent,
    editSubmit,
    deleteData,
    setSelectSmsData,
    setModalOpen,
}) => {
    const dispatch = useDispatch();
    const { resultInfo, smsInfo } = useSelector((state) => state.ResultInfo);

    const onSubmit = async (to, content) => {
        to = resultInfo.data[0].patientPhoneNumber.split('-').join('');

        content = selectSmsData;
        dispatch(ResultActions.postSendSms(to, content));
        setEditDataNo('');
        setSelectSmsData('');
        setModalOpen(false);

        if (smsInfo.data.requestId === null) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
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
                title: 'SMS 전송을 실패 하였습니다.',
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'success',
                title: 'SMS 전송을 성공 했습니다.',
            });
        }
    };

    return (
        <>
            <Container>
                <SmsItemList
                    selectSmsDataHandler={selectSmsDataHandler}
                    open={open}
                    openEditModal={openEditModal}
                    closeEditModal={closeEditModal}
                    editModalOpen={editModalOpen}
                    smsDataInfo={smsDataInfo}
                    selectSmsData={selectSmsData}
                    editDataFilter={editDataFilter}
                    setEditDataFilter={setEditDataFilter}
                    setEditDataNo={setEditDataNo}
                    editFilterNo={editFilterNo}
                    editDataNo={editDataNo}
                    setEditTitle={setEditTitle}
                    setEditContent={setEditContent}
                    editSubmit={editSubmit}
                    deleteData={deleteData}
                />
            </Container>
            <SubmitBtnContanier>
                <SubmitBtn onClick={onSubmit}>
                    메시지 발송하기 <SendToMobileOutlinedIcon />
                </SubmitBtn>
            </SubmitBtnContanier>
        </>
    );
};

export default SmsSelectText;

const Container = styled.div`
    overflow: scroll;
    height: 316px;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    &::-webkit-scrollbar {
    }
`;

const SubmitBtnContanier = styled.div`
    display: block;
    justify-content: flex-end;
    border-top: 1px solid #f0f0f0;
    margin-top: 13px;
    padding-top: 4px;
`;

const SubmitBtn = styled.button`
    display: initial;
    width: 100%;
    padding: 12px 41px;
    margin-top: 10px;
    background: #4186c9;
    border: none;
    color: #f0f0f0;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #5b9ee2;
    }

    &:active {
        background: #165390;
    }

    svg {
        font-size: 18px;
        margin-left: 3px;
    }
`;
