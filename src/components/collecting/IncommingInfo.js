import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import '../../styles/collecting.scss'
import {useEffect} from "react";
import DefaultData from "../result/DefaultData";


const IncommingInfo = ({info, buttonForPrescribeInfo}) => {

    useEffect(() => {

        const ul = document.querySelectorAll(".visit-btn");
        // const test = document.getElementsByClassName(".visit-btn");
        for (let i = 0; i < ul.length; i++) {
            ul[i].addEventListener('click', () => {
                buttonForPrescribeInfo(ul[i].getAttribute('data-key'));
            });
        }

    },[info]);

    return (
            <div className={'left-table patient-comming'}>
                <div className={"content-title"}>
                    <AssignmentOutlinedIcon/>
                    <h3>내원 정보</h3>
                </div>
                {info.length > 0 ? <div className={"table visit-table"}>
                     <ul className={"row first-li"}>
                        <li className={"fl table-title comming-table"}>진료과</li>
                        <li className={"fl table-title comming-table visit-dt"}>내원일자</li>
                        <li className={"fl table-title comming-table"}>진료의</li>
                        <li className={"fl table-title comming-table"}>상태</li>
                    </ul>
                    {
                        info.map((data, index) => {
                                // {/*FIXEME 아래는 스크롤 처리 */}
                                return (
                                    <ul className={"row second-li visit-btn"}
                                        key={index} data-key={data?.VISIT_CODE}>
                                        <li className={"fl comming-table"}>{data?.DEPARTMENT_NAME}</li>
                                        <li className={"fl comming-table visit-dt"}>{data?.VISIT_DT}</li>
                                        <li className={"fl comming-table"}>{data?.USER_NAME}</li>
                                        <li className={"fl comming-table"}>{data?.VISIT_STATUS}</li>
                                    </ul>
                                )
                            }
                        )
                    }
                </div>: <DefaultData/>}
            </div>
    );
}

export default IncommingInfo;