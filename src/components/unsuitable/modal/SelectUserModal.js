import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../styles/unsuitable/unsuitableSelectUser.scss"
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import UnsuitableUserList from "../reasonleft/UnsuitableUserList";
import DefaultData from "../defaultData/DefaultData";
import Swal from 'sweetalert2';

function SelectUser(props) {
    const [selectUser, setSelectUser] = useState('');
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userInfo);
    const { sampleInfo } = useSelector((state) => state.sampleInfo);
    const { prescribeInfo } = useSelector((state) => state.prescribeInfo);

    let radio = document.querySelector('input[type=radio][name=user]:checked');

    // 검색 버튼
    const onSubmit = useCallback((query) => {
        dispatch(UnsuitableActions.getUsers(query));
        setSelectUser('');
    }, [dispatch])

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [setQuery]);

    // 유저 선택 버튼
    const sendUserName = (e) => {
        if (selectUser) {
            if (selectUser.name !== sampleInfo.data[0].collectorId && selectUser.name !== prescribeInfo.data[0].userName) {
                Swal.fire({
                    toast: true,
                    title: '해당 검체에 이력이 없는 사용자입니다.',
                    icon: 'info',
                    confirmButtonColor: '#3C9DF6',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                })
                dispatch(UnsuitableActions.getOneUser(selectUser));
                closeModal();
            } else {
                dispatch(UnsuitableActions.getOneUser(selectUser));
                closeModal();
            }
        } else {
            e.preventDefault();
            toast.error("피통보자를 선택해주세요.", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    function closeModal() {
        props.closeModal();
    }

    const SearchButtonClick = useCallback(() => {
        if (!query) {
            toast.error("이름을 입력해주세요!", {
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
        onSubmit(query);
        setQuery('');
        radio.checked = false;
    }, [onSubmit, query, radio]);

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            if (!query) {
                toast.error("이름을 입력하세요.", {
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
            onSubmit(query);
            setQuery('');
            radio.checked = false;
        }
    }, [onSubmit, query, radio]);

    return (
        <div className="select-user">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>피통보자 검색</h2>
            </div>
            <div className="text">
                <p>찾으시려는 피통보자를 검색해주세요.</p>
            </div>
            <div className="input-username">
                <input type="text"
                    placeholder="이름을 입력해주세요."
                    onChange={onQueryChange}
                    onKeyDown={EnterKeyPress}
                    value={query}
                />
                <button id="btn"
                    onClick={SearchButtonClick}>검색</button>
            </div>
            <div className="user-content">
                {userInfo?.data?.length > 0 && userInfo.data[0].userName ?
                    <UnsuitableUserList setSelectUser={setSelectUser} />
                    : <div className="default_position"><DefaultData division="6" /></div>}
            </div>
            <div className="footer">
                <button className="btn2" onClick={sendUserName}>완료</button>
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
    )
}

export default SelectUser;