import React, { useContext } from "react";
import UserCard from "../../components/userCard";
import { ChatContext } from "../../context/chatContext";
import { User } from "../../common/types";
import "./style.css";

const Users = () => {
  const { userList, selectedUser, setSelectedUser } = useContext(ChatContext);
  return (
    <>
      <div className="messageList">
        {userList.map((user: User) => (
          <UserCard
            onClick={() => setSelectedUser(user)}
            isSelected={user.id === selectedUser.id}
            {...user}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
