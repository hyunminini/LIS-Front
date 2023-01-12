import PatientItem from "./PatientItem";
const ListView =({Listinfo})=>{
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>이름</th>
                        <th>주민번호</th>
                        <th>나이</th>
                        <th>성별</th>
                        <th>혈액형</th>
                        <th>키</th>
                        <th>몸무게</th>
                        <th>전화번호</th>
                        <th>주소</th>
                    </tr>
                    { Listinfo?.data?.length > 0 && Listinfo.data.map((data, index) => {
                            return (
                                    <PatientItem
                                        key={index}
                                        patientName={data.patientName}
                                        patientResidentNumber={data.patientResidentNumber}
                                        patientAge={data.patientAge}
                                        patientGender={data.patientGender}
                                        patientBloodType={data.patientBloodType}
                                        patientHeight={data.patientHeight}
                                        patientWeight={data.patientWeight}
                                        patientPhoneNumber={data.patientPhoneNumber}
                                        patientAddress={data.patientAddress}
                                    />
                            );
                        })} 
                </tbody>
            </table>
        </div>
        
    )

    
}



export default ListView;


