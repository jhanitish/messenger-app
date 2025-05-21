import { User, CurrentUser as Host, Message } from "./types";

const ChatHistory: Message = {
  u1: [
    {
      id: "u1",
      name: "Alice Johnson",
      text: "Hey, are we still on for lunch?",
      timestamp: "2025-05-21T10:15:00Z",
      isUser: false,
    },
  ],
  u2: [
    {
      id: "u0",
      name: "Nitish Jha",
      text: "Hey, are we still on for lunch?",
      timestamp: "2025-05-21T10:15:00Z",
      isUser: false,
    },
    {
      id: "u2",
      name: "Bob Smith",
      text: "Yes, see you at noon!",
      timestamp: "2025-05-21T09:45:00Z",
      isUser: false,
    },
  ],
};

const CurrentUser: Host = {
  id: "u0",
  fname: "Nitish",
  lname: "Jha",
  image: "https://randomuser.me/api/portraits/lego/4.jpg",
};

const UserList: User[] = [
  {
    id: "u1",
    fname: "Alice",
    lname: "Johnson",
    timestamp: "2025-05-21T10:15:00Z",
    isRead: true,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    isOnline: true,
    lastMessage: {
      fname: "Alice",
      text: "Hey, are we still on for lunch?",
    },
  },
  {
    id: "u2",
    fname: "Bob",
    lname: "Smith",
    timestamp: "2025-05-21T09:45:00Z",
    isRead: false,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    isOnline: false,
    lastMessage: {
      fname: "Bob",
      text: "Yes, see you at noon!",
    },
  },
  {
    id: "u3",
    fname: "Carla",
    lname: "Gomez",
    timestamp: "2025-05-21T08:30:00Z",
    isRead: true,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    isOnline: true,
    lastMessage: {
      fname: "Carla",
      text: "Don't forget the meeting at 3.",
    },
  },
  {
    id: "u4",
    fname: "Dan",
    lname: "Wong",
    timestamp: "2025-05-20T22:15:00Z",
    isRead: false,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    isOnline: false,
    lastMessage: {
      fname: "Dan",
      text: "Got it. I’ll be there.",
    },
  },
  {
    id: "u5",
    fname: "Emma",
    lname: "Brown",
    timestamp: "2025-05-21T07:00:00Z",
    isRead: true,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    isOnline: true,
    lastMessage: {
      fname: "Emma",
      text: "Morning! How’s your day starting?",
    },
  },
  {
    id: "u6",
    fname: "Frank",
    lname: "Lewis",
    timestamp: "2025-05-21T06:50:00Z",
    isRead: true,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    isOnline: false,
    lastMessage: {
      fname: "Frank",
      text: "Busy, but good. You?",
    },
  },
  {
    id: "u7",
    fname: "Grace",
    lname: "Hughes",
    timestamp: "2025-05-20T18:25:00Z",
    isRead: false,
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    isOnline: false,
    lastMessage: {
      fname: "Grace",
      text: "Let me know when you’re free.",
    },
  },
  {
    id: "u8",
    fname: "Helen",
    lname: "Nguyen",
    timestamp: "2025-05-21T01:12:00Z",
    isRead: true,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    isOnline: true,
    lastMessage: {
      fname: "Helen",
      text: "I’m free tonight. Want to call?",
    },
  },
  {
    id: "u9",
    fname: "Ian",
    lname: "Miller",
    timestamp: "2025-05-21T03:05:00Z",
    isRead: true,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    isOnline: true,
    lastMessage: {
      fname: "Ian",
      text: "Ping me when done.",
    },
  },
  {
    id: "u10",
    fname: "Jack",
    lname: "Turner",
    timestamp: "2025-05-20T23:50:00Z",
    isRead: false,
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    isOnline: false,
    lastMessage: {
      fname: "Jack",
      text: "Will do. Might take an hour.",
    },
  },
];

export { CurrentUser, ChatHistory, UserList };
