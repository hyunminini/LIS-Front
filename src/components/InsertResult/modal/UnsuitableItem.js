import React from 'react';

const UnsuitableItem = ({data,setText,setReasonName}) => {

    const onText = () => {
        setText(data.unsuitableReasonText)
    }

    return (
        <div onClick={onText}>{data.unsuitableReasonCode}({data.unsuitableReasonName})</div>
    )
};

export default UnsuitableItem;

