import React from "react";
import { useDispatch } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import Swal from 'sweetalert2';

const PrescribeItem = ({
    prescribeCode,
    visitStatus,
    statusName,
    orderName,
    prescribeContents,
    prescribeDt,
    name,
    userId,
    authority
}) => {

    const pickUser = { name, userId, authority };
    const dispatch = useDispatch();
    const pickDocker = () => {
        Swal.fire({
            icon: "question",
            title: `${pickUser.name}`,
            text: `의사를 피통보자로 등록하시겠습니까?`,
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


    return (
        <>
            <tr>
                <td>{prescribeCode}</td>
                <td onClick={pickDocker}>{name}</td>
                <td>{orderName}<p className="hidden-text1">{orderName}</p></td>
                <td>{visitStatus}</td>
                <td>{statusName}</td>
                <td>{prescribeContents}<p className="hidden-text2">{prescribeContents}</p></td>
                <td>{prescribeDt}</td>
            </tr>
        </>
    )
}

export default PrescribeItem;