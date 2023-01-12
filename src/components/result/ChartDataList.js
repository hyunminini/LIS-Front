import React from 'react';
import ChartDataItem from './ChartDataItem';

const ChartDataList = ({ checkedItems, randomColor }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>검사명</th>
                    <th>참고치 / 단위</th>
                    <th>결과수치</th>
                    <th>접수일</th>
                </tr>

                {checkedItems.length > 0 &&
                    checkedItems.map((data, index) => {
                        return (
                            <ChartDataItem
                                key={index}
                                inspectionName={data.inspectionName}
                                figures={data.figures}
                                baseline={data.baseline}
                                unit={data.unit}
                                registerDt={data.registerDt}
                                randomColor={randomColor}
                            />
                        );
                    })}
            </tbody>
        </table>
    );
};

export default ChartDataList;
