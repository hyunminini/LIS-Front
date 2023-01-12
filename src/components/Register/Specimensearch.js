import { useCallback, useState } from "react"
import styled from '@emotion/styled';
import 'react-toastify/dist/ReactToastify.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Insert from "./Insert";
import Cancellation from "./Cancellation";
import WaitListModal from "./WaitListModal";
const Specimensearch = ({onSubmit}) => {


    const [query, setQuery] = useState('');

    const onQueryChange =(e) => {
        setQuery(e.target.value);
    };

    const SearchButtonClick = useCallback(() => {
        onSubmit(query);
        setQuery('');
    }, [onSubmit, query]);


    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(query);
            setQuery('');
        }
    }, [onSubmit, query]);
    return(
        <>
        <Container>
            <SearchOutlinedIcon/>
            <Title>검체번호 조회</Title>
            <SearchInput
                placeholder="바코드 를 입력해주세요"
                onChange={onQueryChange}
                onKeyDown={EnterKeyPress}
                value={query}/>
            <SearchClick onClick={SearchButtonClick}>조회</SearchClick>
            <Insert/>
            <Cancellation/>
            <WaitListModal/>
        </Container>
        </>
    )
}
const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1em;
    border: 1px solid #b9b9b9;
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    box-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.25);
`;
const Title =styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-left: 0.2em;
`;

const SearchInput = styled.input`
    margin-left: 1em;
    padding: 3px 10px 3px 10px;
`;

const SearchClick = styled.button`
    border: 1px solid #3C9DF6;
    background: #fff;
    border-radius: 5px;
    color: #3C9DF6;
    font-weight: bold;
    padding: 3px 13px 3px 13px;
    margin-left: 1em;
    cursor: pointer;
    &:hover {
        background: #3C9DF6;
        color: #fff;
        transition: 0.5s;
        font-weight: bold;
    }
    &:active {
        background: #217BCE;
        border: 1px solid #217BCE;
        transition: 0.5s;
    }
`;
export default Specimensearch