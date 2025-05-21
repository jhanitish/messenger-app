import React from "react";
import { Message as MessageType } from "../common/types";

interface PropType extends MessageType {
  isOnline?: boolean;
  image: string;
}
const Message = (props: PropType) => {
  const {
    id,
    name,
    timestamp,
    image,
    isOnline = false,
    isUser = false,
    text,
  } = props;
  return (
    <div key={id} className="messageCard">
      <div className="msg_image">
        <img className="msg_img" src={image} alt={`Image of ${name}`} />
      </div>
      <div className="msg_detail">
        <div className="msg_info">
          <div className="msg_name">{name}</div>
          <div className="msg_date">
            {new Date(timestamp).toLocaleTimeString()}
          </div>
        </div>
        <div className="msg_txt">{text}</div>
      </div>
    </div>
  );
};

export default Message;
