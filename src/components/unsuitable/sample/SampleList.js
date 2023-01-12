import SampleItem from "./SampleItem";
import React from "react";
import { useSelector } from "react-redux";

const SampleList = () => {
    const { sampleInfo } = useSelector((state) => state.sampleInfo);


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>바코드</th>
                        <th>검사상태</th>
                        <th>바코드출력일자</th>
                        <th>채취일자</th>
                        <th>용기명</th>
                        <th>채취자</th>
                        <th>채혈자</th>
                        <th>처방코드</th>
                        <th>CU</th>
                        <th>SU</th>
                    </tr>
                    {sampleInfo?.data?.length > 0 && sampleInfo.data.map((data, index) => {
                        return (
                            <SampleItem
                                key={index}
                                barcode={data.barcode}
                                statusName={data.statusName}
                                barcodeDt={data.barcodeDt}
                                collectingDt={data.collectingDt}
                                vesselCode={data.vesselCode}
                                name={data.barcodePrinterId}
                                collectorId={data.collectorId}
                                prescribeCode={data.prescribeCode}
                                authority={data.authority}
                                userId={data.barcodePrinterUserId}
                                collectorUserId={data.collectorUserId}
                            />
                        )
                    })}

                </tbody>
            </table>
            
        </>
    )
}

export default React.memo(SampleList);