import React from "react";

const PatientItem = ({
    patientName,patientResidentNumber,patientAge,patientGender,patientBloodType,patientHeight,patientWeight,patientPhoneNumber,patientAddress
}) => {

    return(
        <tr>
            <td>{patientName}</td>
            <td>{patientResidentNumber}</td>
            <td>{patientAge}</td>
            <td>{patientGender}</td>
            <td>{patientBloodType}</td>
            <td>{patientHeight}</td>
            <td>{patientWeight}</td>
            <td>{patientPhoneNumber}</td>
            <td>{patientAddress}</td>
        </tr>
    );
}
export default PatientItem;