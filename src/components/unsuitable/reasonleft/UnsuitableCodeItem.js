import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UnsuitableCodeItem = ({
    unsuitableReasonCode,
    unsuitableReasonName,
    unsuitableStatusName,
    unsuitableStatusCode,
    setPickReason
}) => {
    const { unsuitableSampleInfo } = useSelector((state) => state.unsuitableSampleInfo);

    const [disabled, setDisabled] = useState(false);

    const pickReason = { unsuitableReasonCode, unsuitableReasonName, unsuitableStatusCode };

    const selectReason = () => {
        setPickReason(pickReason);
    }

    useEffect(() => {
        if (unsuitableSampleInfo?.data?.length > 1) {
            if (unsuitableSampleInfo.data.find((item) => item.selectedReason === unsuitableReasonCode)) {
                setDisabled(true)
            }
        }
    }, [unsuitableReasonCode, unsuitableSampleInfo.data]);

    return (
        <>
            <tr>
                <td><input type="radio"
                    name="reason"
                    disabled={disabled}
                    onClick={selectReason}
                ></input></td>
                <td>{unsuitableStatusName}</td>
                <td>{unsuitableReasonCode}</td>
                <td>{unsuitableReasonName}</td>
            </tr>
        </>
    )
}

export default UnsuitableCodeItem;