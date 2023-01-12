import { useSelector } from "react-redux";
import React from "react";
import PrescribeItem from "./PrescribeItem";

const PrescribeList = () => {
    const { prescribeInfo } = useSelector((state) => state.prescribeInfo);
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>처방코드</th>
                        <th>의사명</th>
                        <th>오더명</th>
                        <th>내원정보</th>
                        <th>검사상태</th>
                        <th>처방내용</th>
                        <th>처방일자</th>
                    </tr>
                    {prescribeInfo?.data?.length > 0 && prescribeInfo.data.map((data, index) => {
                        return (
                            <PrescribeItem
                                key={index}
                                prescribeCode={data.prescribeCode}
                                name={data.userName}
                                orderName={data.orderName}
                                visitStatus={data.visitStatus}
                                statusName={data.statusName}
                                prescribeContents={data.prescribeContents}
                                prescribeDt={data.prescribeDt}
                                userId={data.doctorId}
                                authority={data.authority}
                            />
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default PrescribeList;