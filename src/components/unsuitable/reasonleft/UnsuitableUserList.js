import { useSelector } from "react-redux";
import UnsuitableUserItem from "./UnsuitableUserItem";
import React from "react";

const UnsuitableUserList = ({ setSelectUser }) => {
    const { userInfo } = useSelector((state) => state.userInfo);
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>이름</th>
                        <th>직급</th>
                        <th>E-mail</th>
                    </tr>
                    {userInfo?.data?.length > 0 &&
                        userInfo.data[0].userName &&
                        userInfo.data.map((data, index) => {
                            return (
                                <UnsuitableUserItem
                                    key={index}
                                    userId={data.userId}
                                    name={data.userName}
                                    userEmail={data.userEmail}
                                    authority={data.authority}
                                    setSelectUser={setSelectUser}
                                />
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default UnsuitableUserList;