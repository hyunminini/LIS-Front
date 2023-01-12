/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import '../../styles/resultCheck/modal.scss';
import { useDispatch } from 'react-redux';
import ResultActions from '../../redux/modules/Result/ResultActions';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Swal from 'sweetalert2';

const SmsItemList = ({
    selectSmsDataHandler,
    openEditModal,
    closeEditModal,
    editModalOpen,
    smsDataInfo,
    editDataFilter,
    editFilterNo,
    editDataNo,
    setEditTitle,
    setEditContent,
    editSubmit,
    deleteData,
}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ResultActions.getSmsData());
    }, []);

    const editTitleHandler = (e) => {
        setEditTitle(e.target.value);
    };

    const editContentHandler = (e) => {
        setEditContent(e.target.value);
    };

    return (
        <div>
            <div
                className={
                    editModalOpen ? 'openModal modal modal-edit' : 'modal'
                }
            >
                {editDataFilter.length > 0 && editModalOpen ? (
                    <>
                        <header className='edit-header'>
                            <div>
                                <EditOutlinedIcon />
                                <h3>문자 양식 수정</h3>
                            </div>
                            <div>
                                <CloseOutlinedIcon onClick={closeEditModal} />
                            </div>
                        </header>
                        <div className='edit-from'>
                            <span>제목</span>
                            <input
                                defaultValue={editDataFilter[0].smsTitle}
                                onChange={editTitleHandler}
                            />

                            <div className='edit-content-wrap'>
                                <p>내용</p>
                                <textarea
                                    className='edit-content'
                                    defaultValue={editDataFilter[0].smsContent}
                                    onChange={editContentHandler}
                                />
                            </div>

                            <div className='edit-btn'>
                                <button onClick={editSubmit}>수정 완료</button>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>

            {smsDataInfo.data?.length > 0 &&
                smsDataInfo.data.map((data, key) => {
                    return (
                        <ContainerInWrap>
                            <SmsDataWrap>
                                <SmsData
                                    key={key}
                                    type='radio'
                                    name='SmsData'
                                    value={data.smsContent}
                                    onChange={selectSmsDataHandler}
                                    onClick={() => editFilterNo(data.smsNo)}
                                />
                                <SmsDataTitle>{data.smsTitle}</SmsDataTitle>
                            </SmsDataWrap>

                            <TextWrap>
                                <SmsContent>{data.smsContent}</SmsContent>
                                {editDataNo === data.smsNo ? (
                                    <>
                                        <EditBtn
                                            onClick={() =>
                                                openEditModal(data.smsNo)
                                            }
                                        >
                                            <EditOutlinedIcon />
                                        </EditBtn>

                                        <DeleteBtn
                                            onClick={() =>
                                                deleteData(data.smsNo)
                                            }
                                        >
                                            <DeleteOutlineOutlinedIcon />
                                        </DeleteBtn>
                                    </>
                                ) : (
                                    <>
                                        <DefaultEditBtn
                                            onClick={() =>
                                                alert(
                                                    '해당 양식을 체크 후 클릭해주세요.',
                                                )
                                            }
                                        >
                                            <EditOutlinedIcon />
                                        </DefaultEditBtn>

                                        <DefaultDeleteBtn
                                            onClick={() =>
                                                alert(
                                                    '해당 양식을 체크 후 클릭해주세요.',
                                                )
                                            }
                                        >
                                            <DeleteOutlineOutlinedIcon />
                                        </DefaultDeleteBtn>
                                    </>
                                )}
                            </TextWrap>
                        </ContainerInWrap>
                    );
                })}
        </div>
    );
};

export default SmsItemList;

const ContainerInWrap = styled.div`
    border: 1px solid #e9e9e9;
    width: 46.6%;
    margin-right: 4px;
    margin-bottom: 0.5em;
    float: left;
    margin-left: 4px;

    &:after {
        display: block;
        content: '';
        clear: both;
    }
`;
const TextWrap = styled.div`
    position: relative;
`;
const SmsContent = styled.p`
    font-size: 11px;
    padding: 10px 5px 10px 5px;
    height: 128px;
    background: #f4fafa;
`;
const SmsDataTitle = styled.h3`
    font-size: 12px;
    font-weight: normal;
`;
const SmsData = styled.input`
    cursor: pointer;
`;

const SmsDataWrap = styled.div`
    background: #fff;
    padding: 4px 5px 4px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
`;

const DeleteBtn = styled.p`
    position: absolute;
    right: 3px;
    bottom: 2px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: #5ebd5e;
    }

    svg {
        font-size: 16px;
    }
`;

const EditBtn = styled.p`
    position: absolute;
    right: 20px;
    bottom: 2px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: #5ebd5e;
    }

    svg {
        font-size: 16px;
    }
`;

const DefaultDeleteBtn = styled.p`
    position: absolute;
    right: 3px;
    bottom: 2px;
    cursor: pointer;
    svg {
        font-size: 16px;
        color: #ccc;
    }
`;

const DefaultEditBtn = styled.p`
    position: absolute;
    right: 20px;
    bottom: 2px;
    cursor: pointer;

    svg {
        font-size: 16px;
        color: #ccc;
    }
`;
