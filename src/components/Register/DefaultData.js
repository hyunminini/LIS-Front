import React from "react";
import '../../styles/resultCheck/default.scss';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

const DefaultData = () => {
    return (
        <div className="default">
            <div className="default-wrap">
                <div className="default-icon"><WarningOutlinedIcon /></div>
                <h3>입력된 데이터가 없습니다.</h3>
                <p>바코드를 입력 후 조회해 주세요.</p>
            </div>
        </div>
    )
}

export default DefaultData;