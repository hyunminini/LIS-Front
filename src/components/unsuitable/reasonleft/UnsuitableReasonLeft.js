import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import Modal1 from "../modal/Modal1";
import Modal2 from '../modal/Modal2';
import "../../../styles/unsuitable/modal2.scss"
import { ToastContainer, toast } from 'react-toastify';
import SelectUserModal from "../modal/SelectUserModal";
import UnsuitableActions from '../../../redux/modules/Unsuitable/UnsuitableActions';
import ReasonPickerModal from '../modal/ReasonPickerModal';
import DefaultData from '../../common/DefaultData/DefaultData';

const UnsuitableReasonLeft = ({prescribeCode}) => {
    // 모달
    const [selectUser, setSelectUser] = useState(false);
    const [reasonModal, setReasonModal] = useState(false);
    const [reason, setReason] = useState('1');

    // 선택한 유저 정보
    const dispatch = useDispatch();
    const { oneUserInfo } = useSelector((state) => state.oneUserInfo);
    const { sampleInfo } = useSelector((state) => state.sampleInfo);
    const { unsuitableSampleInfo } = useSelector((state) => state.unsuitableSampleInfo);

    const { selectSampleInfo } = useSelector((state) => state.selectSampleInfo);

    // unsuitableSampleInfo
    const [query, setQuery] = useState('');
    const [sampleDetail, setSampleDetail] = useState([{}]);

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

    // 부적합사유 2로 데이터 추가
    let sampleBarcode;
    let selectedReason;
    let selectedReasonName;

    if (sampleInfo?.data?.length > 0) {
        sampleBarcode = sampleInfo.data[0].barcode;
        if (selectSampleInfo.data.prescribeCode !== '' || selectSampleInfo.prescribeCode){
            prescribeCode = selectSampleInfo.data;
        }
    }

    if (reason) {
        selectedReason = reason.unsuitableReasonCode;
        selectedReasonName = reason.unsuitableReasonName;
        if (sampleInfo?.data?.length > 0 && !sampleInfo.data[0].barcode) {
            setReason('');
            setQuery('');
        }
    }
    // localstorage user info
    const notifiedId = oneUserInfo.data.userId;
    const notificatorId = Number(localStorage.getItem('userId'));
    const notificatorUserName = localStorage.getItem('username');

    const onAdd = (e) => {
        e.preventDefault();
        if (!notifiedId || !reason || !sampleBarcode || prescribeCode === undefined || prescribeCode === 0) {
            toast.error("부적합 검체 등록을 위한 사유를 입력해주세요.", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }
        if (unsuitableSampleInfo?.data?.length > 0) {
            if (unsuitableSampleInfo.data.find((item) => item.selectedReason === reason.unsuitableReasonCode)) {
                toast.error("이미 추가된 사유입니다.", {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                setReason('');
                return;
            } else {
                setSampleDetail([...unsuitableSampleInfo.data,
                {
                    sampleBarcode,
                    notifiedId,
                    selectedReason,
                    selectedReasonName,
                    query,
                    notificatorId,
                    prescribeCode
                }]);
            }
        }
    }
    useEffect(() => {
        dispatch(UnsuitableActions.getSample(sampleDetail));
        setQuery('');
    }, [dispatch, sampleDetail]);

    return (
        <div className="unsuitable-wrap left">
            <div className="header-wrap">
                <div className="con-title">
                    <TextSnippetOutlinedIcon />
                    <p>부적합 사유</p>
                </div>
                <div>
                    <span>{notificatorUserName}님</span>
                </div>
            </div>
            {sampleInfo?.data?.length > 0 && sampleInfo.data[0].barcode ?
                <>
                    <form>
                        <div className="select-reason">
                            <p>피통보자</p>
                            {oneUserInfo === undefined ?
                                <input className='user'
                                    readOnly="readOnly"
                                    placeholder="피통보자 선택"
                                    onClick={() => setSelectUser(!selectUser)}
                                /> :
                                <input className='user'
                                    readOnly="readOnly"
                                    placeholder="피통보자 선택"
                                    value={oneUserInfo.data.name || ''}
                                    onClick={() => setSelectUser(!selectUser)}
                                />
                            }
                            <p>부적합 사유 선택</p>
                            {reason === undefined ?
                                <input className='reason'
                                    readOnly="readOnly"
                                    placeholder='사유를 선택하세요.'
                                    onClick={() => setReasonModal(!reasonModal)}>
                                </input> :
                                <input className='reason'
                                    readOnly="readOnly"
                                    placeholder='사유를 선택하세요.'
                                    value={reason.unsuitableReasonName || ''}
                                    onClick={() => setReasonModal(!reasonModal)}>
                                </input>
                            }
                        </div>
                        <div className="write-reason">
                            <textarea placeholder="부적합 사유를 상세하게 작성해주세요."
                                onChange={onQueryChange}
                                value={query}
                            ></textarea>
                            <button
                                className="btn"
                                onClick={onAdd}
                            >추가</button>
                        </div>
                    </form>
                </>
                : <div className='default_position'><DefaultData division="5"/></div>}
            {reasonModal && (
                <Modal2 closeModal={() => setReasonModal(!reasonModal)}>
                    <ReasonPickerModal closeModal={() => setReasonModal(!reasonModal)} setReason={setReason} />
                </Modal2>)}

            {selectUser && (
                <Modal1 closeModal={() => setSelectUser(!selectUser)}>
                    <SelectUserModal closeModal={() => setSelectUser(!selectUser)} />
                </Modal1>)}
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    );
}

export default UnsuitableReasonLeft;