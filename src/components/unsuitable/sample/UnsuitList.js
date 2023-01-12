import React from "react";
import UnsuitItem from "./UnsuitItem";
import { useSelector } from "react-redux";


const UnsuitList = ({ prescribeCode }) => {
    const {unsuitInfo} = useSelector((state) => state.unsuitInfo);

    let data;
    if(unsuitInfo.data.length > 0) {
        data = unsuitInfo.data.filter(item => item.prescribeCode === prescribeCode)
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>분류</th>
                        <th>사유코드</th>
                        <th>사유명</th>
                    </tr>
                    {data?.length > 0 && data.map((data, index) => {
                        return (
                            <UnsuitItem
                                key={index}
                                unsuitableStatusName={data.unsuitableStatusName}
                                unsuitableReasonCode={data.unsuitableReasonCode}
                                unsuitableReasonName={data.unsuitableReasonName}
                            />
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UnsuitList;