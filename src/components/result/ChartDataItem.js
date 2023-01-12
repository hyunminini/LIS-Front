import React from 'react';

const ChartDataItem = ({
    inspectionName,
    figures,
    baseline,
    unit,
    registerDt,
}) => {
    return (
        <>
            <tr>
                <td>{inspectionName}</td>
                <td>
                    {baseline} / {unit.trim() ? unit : <span>-</span>}
                </td>
                <td>{figures}</td>

                <td>{registerDt}</td>
            </tr>
        </>
    );
};

export default ChartDataItem;
