import styles from "./chat.module.css";

const MESSAGES = [
  {
    role: "assistent",
    content: "Welcome! how can i help you today",
  },
];

export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[MESSAGES, ...messages].map(({ role, content }, index) => (
        <div key={index} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}
