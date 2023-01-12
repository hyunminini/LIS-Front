import React from "react";

const UnsuitItem = ({
    unsuitableReasonCode,
    unsuitableReasonName,
    unsuitableStatusName
}) => {

    return (
        <>
            <tr>
                <td>{unsuitableStatusName}</td>
                <td>{unsuitableReasonCode}</td>
                <td>{unsuitableReasonName}</td>
            </tr>
        </>
    )
}

export default UnsuitItem;