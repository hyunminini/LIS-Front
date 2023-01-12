    import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
    import { useSelector } from "react-redux";
    import '../../../styles/unsuitable/unsuitableReasonPicker.scss'
    import UnsuitableCodeList from "../reasonleft/UnsuitableCodeList";
    import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
    import { ToastContainer, toast } from 'react-toastify';
    import { useCallback } from "react";
    import { useState } from "react";
    import { useEffect } from "react";

    function ReasonPickerModal({ closeModal, setReason }) {
        const { unsuitableReasonInfo } = useSelector((state) => state.unsuitableReasonInfo);
        const { sampleInfo } = useSelector((state) => state.sampleInfo);

        const userAuth = localStorage.getItem('authority').replace(/[^A-Za-z]/g, '');

        const [query, setQuery] = useState('');
        const [findCode, setFindCode] = useState([]);
        const [pickReason, setPickReason] = useState();
        const [category, setCategory] = useState([]);

        const onQueryChange = useCallback((e) => {
            setQuery(e.target.value.replace(/[^A-Za-z]/g, '').toUpperCase());
        }, [setQuery]);

        const onSubmitQuery = () => {
            setFindCode(category.filter(item => item.unsuitableReasonCode.includes(query)));
        }

        const reset = () => {
            setFindCode(category.filter(item => item.unsuitableReasonCode.includes('')));
        }

        useEffect(() => {
            if(unsuitableReasonInfo?.data?.length > 0) {
                if(userAuth === 'nurse') {
                    setCategory(unsuitableReasonInfo.data.filter(item => item.unsuitableStatusCode === 'CU'));
                } else if(userAuth === 'inspector') {
                    setCategory(unsuitableReasonInfo.data);
                    
                }
            }
        }, [sampleInfo.data, unsuitableReasonInfo.data]);

        const commitReason = () => {
            if (pickReason) {
                setReason(pickReason);
                closeModal();
            } else {
                toast.error("사유를 선택해주세요.", {
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
        }

        return (
            <div className="select-user">
                <div className="con-title">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>부적합 사유 선택</h2>
                </div>
                <div className="text">
                    <p>부적합 사유를 선택해주세요.</p>
                </div>
                <div className="input-reasonname">
                    <input type="text"
                        placeholder="영어로 사유코드를 입력해주세요."
                        onChange={onQueryChange}
                        value={query}
                    />
                    <button id="btn"
                        onClick={onSubmitQuery}>검색</button>
                    <button id="btn1"
                        onClick={reset}><RestartAltOutlinedIcon /></button>
                </div>
                <div className="reason-content">
                    {unsuitableReasonInfo?.data?.length > 0 &&
                        <UnsuitableCodeList findCode={findCode} setPickReason={setPickReason} category={category} />
                    }
                </div>
                <div className="reason-footer">
                    <button className="btn2" onClick={commitReason}>완료</button>
                    <button className="btn2" onClick={closeModal}>닫기</button>
                </div>
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

    export default ReasonPickerModal;
