import React, { createContext, useState, ReactNode } from "react";
import { User, Message, CurrentUser as CurrentUserType } from "../types";
import {
  UserList as InitialUserList,
  ChatHistory as InitialChatHistory,
  CurrentUser as InitialCurrentUser,
} from "../common/CONSTANTS";

interface ChatContextType {
  CurrentUser: CurrentUserType;
  userList: User[];
  chatHistory: Record<string, Message[]>;
  selectedUser: User;
  setSelectedUser: (user: User) => void;
  sendMessage: (receiverId: string, text: string) => void;
}

export const ChatContext = createContext<ChatContextType>(
  {} as ChatContextType
);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [userList, setUserList] = useState<User[]>(InitialUserList);
  const [chatHistory, setChatHistory] =
    useState<Record<string, Message[]>>(InitialChatHistory);
  const [selectedUser, setSelectedUser] = useState<User>(InitialUserList[0]);

  const sendMessage = (receiverId: string, text: string) => {
    const timestamp = new Date().toISOString();
    const newMessage: Message = {
      id: InitialCurrentUser.id,
      name: `${InitialCurrentUser.fname} ${InitialCurrentUser.lname}`,
      text,
      timestamp,
      isUser: true,
    };

    const updatedChat = chatHistory[receiverId]
      ? [...chatHistory[receiverId], newMessage]
      : [newMessage];

    setChatHistory({
      ...chatHistory,
      [receiverId]: updatedChat,
    });

    setUserList(
      userList.map((u) =>
        u.id === receiverId
          ? {
              ...u,
              lastMessage: {
                fname: InitialCurrentUser.fname,
                text,
              },
              timestamp,
              isRead: false,
            }
          : u
      )
    );
  };

  return (
    <ChatContext.Provider
      value={{
        CurrentUser: InitialCurrentUser,
        userList,
        chatHistory,
        selectedUser,
        setSelectedUser,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
