import React from "react";
import ListView from "../components/Register/ListView";
import Specimensearch from "../components/Register/Specimensearch";
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import '../styles/search.scss'
import TextSnippetOutlined from "@mui/icons-material/TextSnippetOutlined";
import { useDispatch, useSelector } from "react-redux";
import ListViewPlus from "../components/Register/ListViewPlus";
import RegisterActions from "../redux/modules/Register/RegisterActions"
import DefaultData from "../components/Register/DefaultData";
const Register = () => {
    const {Listinfo} = useSelector((state)=>state.Listinfo);
    const {Listinfoplus} = useSelector((state)=> state.Listinfoplus);
    const dispatch = useDispatch();
    const onSubmit = async (query) => {
        dispatch(RegisterActions.getDateSearch(query));
        dispatch(RegisterActions.getDateSearchd(query));
    }

    return(
    <>
        <div className="containerbar">
            <div className="containerbar-sub">
                <div className="title-container">
                    <AddToQueueOutlinedIcon/>
                    <h2>검체접수  <span>Receipt of specimen</span></h2>
                </div>
                <Specimensearch onSubmit={onSubmit}/>
                <div className="register-wrap">
                    <div className="register-title">
                        <TextSnippetOutlined/>
                        <p>환자정보</p>
                    </div>
                        {Listinfo.data.length > 0 ?
                            <ListView Listinfo={Listinfo}/>
                            :
                            <DefaultData/>
                        }
                </div>
                <div className="register-wrap">
                    <div className="register-title">
                        <TextSnippetOutlined/>
                        <p>검체정보</p>
                    </div>
                    {Listinfo.data.length > 0 ?
                        <ListViewPlus Listinfoplus={Listinfoplus}/>
                        :
                        <DefaultData/>
                    }
                </div>
            </div>
        </div>
    </>
    );
}

export default Register;