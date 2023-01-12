import React from "react";

const UnsuitableUserItem = ({
    userId,
    name,
    authority,
    userEmail,
    setSelectUser,
}) => {
    const pickUser = { userId, name, authority };

    const selectUser = () => {
        setSelectUser(pickUser);
    }

    return (
        <>
            <tr>
                <td><input type="radio"
                    name="user"
                    onClick={selectUser}
                ></input></td>
                <td>{userId}</td>
                <td>{name}</td>
                <td>{authority}</td>
                <td>{userEmail}</td>
            </tr>
        </>
    )
}

export default UnsuitableUserItem;