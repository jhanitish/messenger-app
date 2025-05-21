import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/chatContext";
import Message from "../../components/message";
import { Message as MessageType } from "../../common/types";
import "./style.css";

const ChatWindow = () => {
  const { selectedUser, chatHistory, sendMessage, CurrentUser } =
    useContext(ChatContext);
  const [chats, setChats] = useState<MessageType[]>([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    if (selectedUser?.id && chatHistory[selectedUser.id]) {
      setChats(chatHistory[selectedUser.id]);
    } else {
      setChats([]);
    }
  }, [selectedUser, chatHistory]);

  const handleSend = () => {
    const text = messageText.trim();
    if (!text) return;
    sendMessage(selectedUser.id, text);
    setMessageText("");
  };

  return (
    <div className="chatWindow">
      <div className="info">
        <label className="headname">{`${selectedUser.fname} ${selectedUser.lname}`}</label>
        <label className="active">
          <span className={selectedUser.isOnline ? "online" : "offline"} />
          Active Now
        </label>
      </div>
      <div className="messages">
        {chats.length ? (
          chats.map((chat, idx) => (
            <Message
              key={`${chat.id}_${idx}`}
              id={`${chat.id}_${idx}`}
              name={chat.name}
              timestamp={chat.timestamp}
              image={
                chat.id === CurrentUser.id
                  ? CurrentUser.image
                  : selectedUser.image
              }
              text={chat.text}
            />
          ))
        ) : (
          <>Start conversation</>
        )}
      </div>
      <div className="textbox">
        <textarea
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </div>
      <div className="actionBtn">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
