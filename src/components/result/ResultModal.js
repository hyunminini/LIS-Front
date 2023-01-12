/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import '../../styles/resultCheck/modal.scss';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined';
import SmsDataList from './SmsDataList';
import SmsSelectText from '../../components/result/SmsSelectText.js';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ResultModal = ({
    open,
    close,
    setModalOpen,
    selectSmsData,
    setSelectSmsData,
    editDataNo,
    setEditDataNo,
    editModalOpen,
    setEditModalOpen,
    addModalOpen,
    setAddModalOpen,
    setEditTitle,
    setEditContent,
    editSubmit,
    editDataFilter,
    setEditDataFilter,
    setSmsAddTitle,
    setSmsAddContent,
    addSubmit,
    smsAddTitle,
    smsAddContent,
    deleteData,
    editTitle,
    editContent,
}) => {
    const { smsDataInfo } = useSelector((state) => state.ResultInfo);

    const addTitleHandler = (e) => {
        setSmsAddTitle(e.target.value);
    };
    const addContentHandler = (e) => {
        setSmsAddContent(e.target.value);
    };

    const selectSmsDataHandler = (e) => {
        setSelectSmsData(e.target.value);
        const newEditData = smsDataInfo.data.filter(
            (it) => it.smsNo === editDataNo,
        );
        setEditDataFilter(newEditData);
    };

    const openAddModal = () => {
        setAddModalOpen(true);
    };

    const closeAddModal = () => {
        setAddModalOpen(false);
        setSmsAddTitle('');
        setSmsAddContent('');
    };

    const editFilterNo = (smsNo) => {
        setEditDataNo(smsNo);
        setEditTitle(editDataFilter[0].smsTitle);
        setEditContent(editDataFilter[0].smsContent);
    };

    const openEditModal = (smsNo) => {
        setEditModalOpen(true);
        const newEditData = smsDataInfo.data.filter(
            (it) => it.smsNo === editDataNo,
        );

        setEditDataFilter(newEditData);
    };

    useEffect(() => {
        if (editDataFilter.length > 0 && editModalOpen) {
            setEditTitle(editDataFilter[0].smsTitle);
            setEditContent(editDataFilter[0].smsContent);
        }
    }, [editModalOpen]);

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    return (
        <>
            <div
                className={addModalOpen ? 'openModal modal modal-add' : 'modal'}
            >
                {addModalOpen ? (
                    <>
                        <header className='add-header'>
                            <div>
                                <AddOutlinedIcon />
                                <h3>문자 양식 생성</h3>
                            </div>
                            <div>
                                <CloseOutlinedIcon onClick={closeAddModal} />
                            </div>
                        </header>
                        <div className='add-from'>
                            <span>제목</span>
                            <input
                                onChange={addTitleHandler}
                                value={smsAddTitle}
                                name='smsTitle'
                            />

                            <div className='add-content-wrap'>
                                <p>내용</p>
                                <textarea
                                    className='add-content'
                                    onChange={addContentHandler}
                                    value={smsAddContent}
                                    name='smsContent'
                                />
                            </div>

                            <div className='add-btn'>
                                <button onClick={addSubmit}>양식 생성</button>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>

            <div
                className={open ? 'openModal modal modal-background' : 'modal'}
                onClick={close}
            />
            <div className={open ? 'openModal modal modalWrap' : 'modal'}>
                {open ? (
                    <>
                        <header className='modal-wrap-header backgroundColor'>
                            <div className='header-flex'>
                                <ForwardToInboxSharpIcon />
                                <h2>SMS Message</h2>
                            </div>
                            <div className='modal-close'>
                                <LogoutOutlinedIcon onClick={close} />
                            </div>
                        </header>

                        <div className='modal-flex-wrap'>
                            <div className='phone_background'>
                                <div className='phone_wrap'>
                                    <div className='modal-in-wrap phone'>
                                        <header className='modal-in-header'>
                                            <div className='camera-wrap'>
                                                <ul>
                                                    <li className='sound'></li>
                                                    <li className='camera'></li>
                                                </ul>
                                            </div>
                                            <ul className='top-icon'>
                                                <li>
                                                    <SignalCellularAltOutlinedIcon />
                                                </li>
                                                <li>
                                                    <WifiOutlinedIcon />
                                                </li>
                                                <li>
                                                    <BatteryFullOutlinedIcon />
                                                </li>
                                            </ul>
                                        </header>
                                        <SmsDataList
                                            close={close}
                                            selectSmsData={selectSmsData}
                                            setSelectSmsData={setSelectSmsData}
                                            selectSmsDataHandler={
                                                selectSmsDataHandler
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='modal-in-wrap select'>
                                <header className='modal-wrap-header sms-select'>
                                    <div className='modal-content title'>
                                        <SpeakerNotesOutlinedIcon />
                                        <ModalTitle>
                                            문자 양식 리스트
                                        </ModalTitle>
                                    </div>
                                    <div className='modal-content add'>
                                        <AddOutlinedIcon
                                            onClick={openAddModal}
                                        />
                                    </div>
                                </header>
                                <SmsSelectText
                                    setModalOpen={setModalOpen}
                                    selectSmsData={selectSmsData}
                                    setSelectSmsData={setSelectSmsData}
                                    selectSmsDataHandler={selectSmsDataHandler}
                                    open={open}
                                    openEditModal={openEditModal}
                                    closeEditModal={closeEditModal}
                                    editModalOpen={editModalOpen}
                                    smsDataInfo={smsDataInfo}
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
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};
const ModalTitle = styled.h2`
    font-size: 16px;
`;

export default ResultModal;
