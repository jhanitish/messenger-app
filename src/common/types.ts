export interface Message {
  id: string;
  name: string;
  text: string;
  timestamp: string;
  isUser: boolean;
}

export interface LastMessage {
  fname: string;
  text: string;
}

export interface User {
  id: string;
  fname: string;
  lname: string;
  timestamp: string;
  isRead: boolean;
  image: string;
  isOnline: boolean;
  lastMessage: LastMessage;
}

export interface CurrentUser {
  id: string;
  fname: string;
  lname: string;
  image: string;
}
