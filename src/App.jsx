import { useState } from "react";
import { Chat } from "./components/chat";
import styles from "./app.module.css";
import { Controls } from "./components/control";

function App() {
  const [messages, setMessages] = useState([]);

    function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, { content, role: "user" }]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="./chat-bot.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onLoadData={handleContentSend}/>
    </div>
  );
}

export default App;
