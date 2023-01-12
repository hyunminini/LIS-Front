import { useState } from 'react';
import '../styles/login.scss';
import logo from '../assets/images/DOUZONE-white.png';
import axios from 'axios';
import { API_URL } from '../utils/constants/Config';
import Swal from 'sweetalert2';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] =
    'http://localhost:3000';
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'post';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    const EnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            axios
                .post(`${API_URL}/user-service/login`, {
                    id: inputId,
                    pw: inputPw,
                })
                .then((res) => {
                    const token = res.data.accessToken;
                    const authdata = res.data.auth;
                    const usernamedata = res.data.name;
                    const userid = res.data.userId;

                    localStorage.setItem('AccessToken', token);
                    localStorage.setItem('authority', authdata);
                    localStorage.setItem('username', usernamedata);
                    localStorage.setItem('userId', userid);

                    authdata === '[nurse]' ? (
                        (window.location.href = '/Collecting')
                    ) : authdata === '[inspector]' ? (
                        (window.location.href = '/Register')
                    ) : authdata === '[doctor]' ? (
                        (window.location.href = '/ResultCheck')
                    ) : (
                        <></>
                    );
                })
                .catch((error) => ({
                    error: (error = Toast.fire({
                        icon: 'error',
                        title: '로그인에 실패하였습니다.',
                    })),
                }));
        }
    };
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

    const OnClicked = () => {
        axios
            .post(`${API_URL}/user-service/login`, {
                id: inputId,
                pw: inputPw,
            })
            .then((res) => {
                const token = res.data.accessToken;
                const authdata = res.data.auth;
                const usernamedata = res.data.name;
                const userid = res.data.userId;

                localStorage.setItem('AccessToken', token);
                localStorage.setItem('authority', authdata);
                localStorage.setItem('username', usernamedata);
                localStorage.setItem('userId', userid);

                authdata === '[nurse]' ? (
                    (window.location.href = '/Collecting')
                ) : authdata === '[inspector]' ? (
                    (window.location.href = '/Register')
                ) : authdata === '[doctor]' ? (
                    (window.location.href = '/ResultCheck')
                ) : (
                    <></>
                );
            })
            .catch((errors) => ({
                errors: (errors = Toast.fire({
                    icon: 'error',
                    title: '로그인에 실패하였습니다.',
                })),
            }));
    };

    return (
        <div className='login-body'>
            <div>
                <div className='login-form'>
                    <h1>
                        <img src={logo} alt='로고' />
                    </h1>
                    <h2>Health Information System</h2>
                    <div>
                        <input
                            onKeyDown={EnterKeyPress}
                            value={inputId}
                            onChange={handleInputId}
                            placeholder='아이디를 입력 해주세요'
                        ></input>
                        <br />
                        <input
                            onKeyDown={EnterKeyPress}
                            value={inputPw}
                            onChange={handleInputPw}
                            type='password'
                            placeholder='비밀번호를 입력해주세요'
                        ></input>
                        <br />
                    </div>
                    <button onClick={() => OnClicked()}>로그인</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
