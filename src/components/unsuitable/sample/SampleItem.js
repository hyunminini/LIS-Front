import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import Swal from 'sweetalert2';
import { useState } from "react";
import { useEffect } from "react";
import { FaTintSlash } from "react-icons/fa";
import Modal3 from "../modal/Modal3";
import UnsuitInfoModal from "../modal/UnsuitInfoModal";




const SampleItem = ({
    barcode,
    statusName,
    barcodeDt,
    collectingDt,
    vesselCode,
    name,
    collectorId,
    prescribeCode,
    collectorUserId,
    authority,
    userId
}) => {
    const [modal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const {unsuitableSampleInfo} = useSelector((state) => state.unsuitableSampleInfo);
    const {unsuitInfo} = useSelector((state) => state.unsuitInfo);
    
    const dispatch = useDispatch();
    const userAuth = localStorage.getItem('authority').replace(/[^A-Za-z0-9]/g, '');

    let cu;
    let su;

    let pickUser = { userId, name, authority };

    const barcodePrintUser = () => {
        Swal.fire({
            icon: "question",
            title: `${pickUser.name}`,
            text: `피통보자로 등록하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: "등록",
            cancelButtonText: "취소",
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(UnsuitableActions.getOneUser(pickUser));
            }
            else {
            }
        });
    }

    const collectorUser = () => {
        Swal.fire({
            icon: "question",
            title: `${pickUser.name}`,
            text: `피통보자로 등록하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: "등록",
            cancelButtonText: "취소",
        }).then((res) => {
            if (res.isConfirmed) {
                let userId;
                userId = collectorUserId;
                pickUser = { userId, name, authority }
                dispatch(UnsuitableActions.getOneUser(pickUser));
                Swal.fire('등록이 완료되었습니다.', 'success');
            }
            else {
            }
        });
    }

    const selectPrescribeCode = () => {
        if(unsuitableSampleInfo?.data?.length>1){
            dispatch(UnsuitableActions.getSample([{}]));
        }
        dispatch(UnsuitableActions.getOneSample(prescribeCode));
    }

    if(unsuitInfo?.data?.length > 0 ){
        unsuitInfo.data.map((data)=> {
            if(data.prescribeCode === prescribeCode && data.unsuitableStatusName === "채혈부적합") {
                cu = "CU"
            } else if (data.prescribeCode === prescribeCode && data.unsuitableStatusName === "검체부적합") {
                su = "SU"
            }
        })    
    }


    useEffect(() => {
        if(userAuth === "inspector" && su === "SU") {
            setDisabled(true);
        } 
    },[cu, su, userAuth])

    useEffect(() => {
        if(userAuth === "nurse" && cu === "CU") {
            setDisabled(true);
        }
    },[cu, su, userAuth])

    useEffect(() => {
        if(disabled){
            setDisabled(false);
        }
    }, [barcode])

    useEffect(() => {
        if(statusName === "바코드출력" && userAuth === "inspector") {
            setDisabled(true);
        }
    },[cu, su, userAuth])


    const openModal = () => {
        setModal(!modal)
    }





    return (
        <>
            <tr>
                <td><input type="radio"
                        name="prescribeCode"
                        disabled={disabled}
                        onClick={selectPrescribeCode}
                ></input></td>
                <td>{barcode}</td>
                <td>{statusName}</td>
                <td>{barcodeDt}</td>
                {!collectingDt ?
                    <td>-</td> :
                    <td>{collectingDt}</td>
                }
                <td>{vesselCode}</td>
                <td onClick={barcodePrintUser}>{name}</td>
                {!collectorId ?
                    <td>-</td> :
                    <td onClick={collectorUser}>{collectorId}</td>
                }
                <td>{prescribeCode}</td>
                {cu === "CU" ?
                <td className="cu" onClick={openModal}><FaTintSlash /></td>
                :<td>-</td>
                }
                
                {su === "SU" ?
                <td className="su" onClick={openModal}><FaTintSlash /></td>
                :<td>-</td>
                }
                {modal && (
                    <>
                        <Modal3 >
                            <UnsuitInfoModal prescribeCode={prescribeCode} setModal={setModal} modal={modal}/>
                        </Modal3>
                    </>
                )}
            </tr>
        </>
    )
}

export default SampleItem;