import styled from "@emotion/styled";
const WaitListModal = ()=>{

    return(
    <Contain><Modal><span>접수대기자</span></Modal></Contain>
    );
}
export default WaitListModal;
const Contain = styled.div`
    display: flex;
    margin-left:auto;
`
const Modal = styled.button`
    border: 1px solid #3c9df6;
    background: #fff;
    border-radius: 5px;
    color: #3c9df6;
    font-weight: bold;
    padding: 3px 13px 3px 13px;
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