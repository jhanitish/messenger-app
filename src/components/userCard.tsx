import React from "react";
import { User } from "./../common/types";
import { clipText } from "../common/utils";

interface PropType extends User {
  onClick: () => {};
}
const UserCard = (props: PropType) => {
  const {
    id,
    fname,
    lname,
    timestamp,
    isRead,
    image,
    isOnline,
    isSelected,
    lastMessage,
    onClick,
  } = props;
  return (
    <div
      key={id}
      className={`userCard ${isSelected ? "isSelected" : ""}`}
      onClick={onClick}
    >
      <div className="image">
        <span className={isOnline ? "online" : "offline"} />
        <img className="thumbnail" src={image} alt={`Image of ${fname}`} />
      </div>
      <div className="details">
        <div className="data">
          <div className="name">{`${fname} ${lname}`}</div>
          <div className="date">{new Date(timestamp).toLocaleDateString()}</div>
        </div>
        <div className="msg">{`${lastMessage.fname}: ${clipText(
          lastMessage.text,
          2
        )} `}</div>
      </div>
    </div>
  );
};

export default UserCard;
