import React from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import "../../../styles/insertResult/modal.scss"
import UnregisteredItem from "./UnregisteredItem";
import DefaultData from "../../common/DefaultData/DefaultData";

const UnregisteredModal = ({UnregisteredInfo, setBarcode, closeModal}) =>{

    return (
        <div className="modal_wrap">
            <div className="modal_title">
                <ArticleOutlinedIcon/>
                <p>결과 미등록 검체 :</p>
                <p>{UnregisteredInfo?.data?.length}건</p>
            </div>
            {UnregisteredInfo?.data?.length > 0 ?
                <div className="modal_table table_scroll">
                    <table>
                        <tbody>
                        <tr className="table_title">
                            <th>환자번호</th>
                            <th>검체번호</th>
                            <th>오더번호</th>
                            <th>접수시간</th>
                            <th>등록 버튼</th>
                        </tr>

                        {UnregisteredInfo?.data?.length > 0 && UnregisteredInfo.data.map((data, index) => {
                            return (
                                <UnregisteredItem
                                    key={index}
                                    data={data}
                                    setBarcode={setBarcode}
                                    closeModal={closeModal}
                                />
                            )
                        })}

                        </tbody>
                    </table>
                </div> :
                <div className="default_position">
                    <DefaultData division="2"/>
                </div>
            }
        </div>
    )
}

export default UnregisteredModal;
