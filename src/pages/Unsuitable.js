import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import UnsuitableActions from "../redux/modules/Unsuitable/UnsuitableActions";
import SearchBar from "../components/unsuitable/searchbar/SearchBar";
import SampleList from "../components/unsuitable/sample/SampleList";
import PrescribeList from "../components/unsuitable/perscribe/PrescribeList";
import UnsuitableReasonLeft from "../components/unsuitable/reasonleft/UnsuitableReasonLeft";
import UnsuitableReasonRight from "../components/unsuitable/reasonright/UnsuitableReasonRight";
import { DoNotDisturbAltOutlined } from "@mui/icons-material";
import '../styles/unsuitable/unsuitable.scss';
import DefaultData from "../components/common/DefaultData/DefaultData";
import { useRef } from "react";


const Unsuitable = () => {

    const { sampleInfo } = useSelector((state) => state.sampleInfo);
    const dispatch = useDispatch();
    const prescribeCode = useRef();


    const onSubmit = (barcode, authority) => {
        if (barcode !== '') {
            dispatch(UnsuitableActions.getSamples(barcode, authority));
            dispatch(UnsuitableActions.getPrescribes(barcode, authority));
            dispatch(UnsuitableActions.getUnsuitInfos(barcode));
            // store 초기화
            dispatch(UnsuitableActions.getSample([{}]));
            dispatch(UnsuitableActions.getOneUser(''));
            dispatch(UnsuitableActions.getOneSample(0));
        }
    }



    useEffect(() => {
        dispatch(UnsuitableActions.getUnsuitableReason());
    }, [dispatch]);

    return (
        <div className="wrap">
            <div className="max-wrap">
                <div className="title-wrap">
                    <DoNotDisturbAltOutlined />
                    <h2>부적합 검체등록 <span>Unsuitable sample registration</span></h2>
                </div>
                <SearchBar onSubmit={onSubmit} />
                <div className="content1">
                    <div className="sample-wrap">
                        <div className="con-title">
                            <BloodtypeOutlinedIcon />
                            <p>검체정보</p>
                        </div>
                        <div className="sample-table">
                            {sampleInfo?.data?.length > 0 && sampleInfo.data[0].barcode ?
                                <SampleList /> : 
                                <div className="default_position"><DefaultData division="5" /></div>
                            }
                        </div>
                    </div>
                    <div className="perscribe-wrap">
                        <div className="con-title">
                            <LocalHospitalOutlinedIcon />
                            <p>처방정보</p>
                        </div>
                        <div className="prescribe-table">
                            {sampleInfo?.data?.length > 0 && sampleInfo.data[0].barcode ?
                                <PrescribeList /> :
                                <div className="default_position"><DefaultData division="5" /></div>
                            }
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <UnsuitableReasonLeft prescribeCode={prescribeCode.current} />
                    <UnsuitableReasonRight />
                </div>
            </div>
        </div>
    )
}

export default Unsuitable;