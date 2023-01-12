import React, { useCallback, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchForm = ({ onSubmit }) => {
    const year = new Date().getFullYear();
    const month =
        new Date().getMonth() > 9
            ? new Date().getMonth() + 1
            : '0' + new Date().getMonth() + 1;
    const date =
        new Date().getDate() > 9
            ? new Date().getDate()
            : '0' + new Date().getDate();
    const today = year + '-' + month + '-' + date;

    const startToday = new Date();
    const monthAgo = new Date(startToday);
    monthAgo.setMonth(startToday.getMonth() - 3);

    const [startDate, setStartDate] = useState(
        monthAgo.toISOString().slice(0, 10),
    );
    const [endDate, setEndDate] = useState(today);
    const [radioDate, setRadioDate] = useState('');
    const [orderSelect, setOrderSelect] = useState('');
    const [query, setQuery] = useState('');

    const onChangeStartDate = useCallback(
        (e) => {
            if ('0000-00-00' <= e.target.value && e.target.value <= endDate) {
                setStartDate(e.target.value);
            }
        },
        [endDate],
    );

    const onChangeEndDate = useCallback(
        (e) => {
            if (
                startDate <= e.target.value &&
                e.target.value <= new Date().toISOString().slice(0, 10)
            ) {
                setEndDate(e.target.value);
            }
        },
        [startDate],
    );

    const onChangeRegisterDate = (e) => {
        setRadioDate(e.target.value);
    };

    const onChangeOrderSelect = (e) => {
        setOrderSelect(e.target.value);
    };

    useEffect(() => {
        setRadioDate('registerdate');
    }, []);

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

    useEffect(() => {
        setOrderSelect('allOrder');
    }, []);

    const SearchButtonClick = useCallback(() => {
        if (!query) {
            toast.error('환자번호를 입력해주세요.', {
                position: 'top-right',
                autoClose: 2000,
                theme: 'colored',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        onSubmit(query, startDate, endDate, radioDate, orderSelect);
        setQuery('');
    }, [onSubmit, query, startDate, endDate, radioDate, orderSelect]);

    const EnterKeyPress = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                if (!query) {
                    toast.error('환자번호를 입력해주세요.', {
                        position: 'top-right',
                        autoClose: 2000,
                        theme: 'colored',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    return;
                }
                onSubmit(query, startDate, endDate, radioDate, orderSelect);
                setQuery('');
            }
        },
        [onSubmit, query, startDate, endDate, radioDate, orderSelect],
    );

    return (
        <>
            <Container>
                <SearchOutlinedIcon />
                <SearchTitle>환자번호 조회</SearchTitle>
                <OrderSelect onChange={onChangeOrderSelect}>
                    <option value='allOrder'>오더코드 전체선택</option>
                    <option value='CBC'>CBC</option>
                    <option value='CBC_DIFF'>CBC_DIFF</option>
                    <option value='CBC_reti'>CBC_reti</option>
                    <option value='CMT'>CMT</option>
                    <option value='hCG'>hCG</option>
                    <option value='JFM'>JFM</option>
                </OrderSelect>
                <SearchInput
                    placeholder='환자번호를 입력해주세요.'
                    onChange={onQueryChange}
                    onKeyDown={EnterKeyPress}
                    value={query}
                />
                <StartDate
                    type='date'
                    value={startDate}
                    onChange={onChangeStartDate}
                />
                <DateSpan>~</DateSpan>
                <EndDate
                    type='date'
                    value={endDate}
                    onChange={onChangeEndDate}
                />
                <SearchSpan>접수일자</SearchSpan>
                <SelectData
                    type='radio'
                    name='radioDate'
                    value='registerdate'
                    onChange={onChangeRegisterDate}
                    checked={radioDate === 'registerdate'}
                />
                <SearchSpan>오더일자</SearchSpan>
                <SelectData
                    type='radio'
                    name='radioDate'
                    value='prescribedate'
                    onChange={onChangeRegisterDate}
                />
                <SubmitBtn onClick={SearchButtonClick}>조회</SubmitBtn>
            </Container>

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
        </>
    );
};

export default SearchForm;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1em;
    border: 1px solid #b9b9b9;
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    box-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.25);
`;

const SearchTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-left: 0.2em;
`;

const SearchInput = styled.input`
    margin-left: 0.5em;
    padding: 3px 10px 3px 10px;
`;

const SearchSpan = styled.span`
    margin-left: 10px;
    font-size: 14px;
`;

const StartDate = styled.input`
    font-size: 12px;
    margin-left: 0.5em;
    padding: 2px 10px 2px 10px;
    word-spacing: -5px;
`;

const DateSpan = styled.span`
    margin-left: 8px;
    padding-top: 5px;
`;

const EndDate = styled.input`
    font-size: 13px;
    margin-left: 0.5em;
    padding: 2px 10px 2px 10px;
    word-spacing: -5px;
`;

const SelectData = styled.input`
    margin-left: 5px;
`;

const SubmitBtn = styled.button`
    border: 1px solid #3c9df6;
    background: #fff;
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

const OrderSelect = styled.select`
    color: #797979;
    margin-left: 10px;
    padding: 3px 10px 3px 10px;
`;
