import React from "react";

const RegisterItem = ({
    patientNo,barcode,collectorId,collectingDt,orderCode,vesselCode,sampleCode,statusCode,unsuitableStatusCode,prescribeCode
}) => {

    return(
        <tr>
            <td>{patientNo}</td>
            <td>{barcode}</td>
            <td>{collectingDt}</td>
            <td>{collectorId}</td>
            <td>{orderCode}</td>
            <td>{prescribeCode}</td>
            <td>{vesselCode}</td>
            <td>{sampleCode}</td>
            <td>{statusCode}</td>
            <td>{unsuitableStatusCode}</td>
        </tr>
    );
}
export default RegisterItem;