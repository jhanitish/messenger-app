import "./styles.css";
import Users from "./pages/users";
import ChatWindow from "./pages/chatwindow";
import { ChatProvider } from "./context/chatContext";

export default function App() {
  return (
    <ChatProvider>
      <div className="App">
        <div className="Main">
          <div className="LeftSide">
            <Users />
          </div>
          <div className="RightSide">
            <ChatWindow />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}
