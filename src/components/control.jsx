import { useState } from "react";
import styles from "./Control.module.css";

export function Controls({onLoadData}) {

  const [value, setValue] = useState('')

  function setFormValue (event) {
    setValue(event.target.value)
  }

  function sendData () {
    if(value.trim().length > 0) {
      onLoadData(value)
      setValue('')
    }
  }

  function handleEntrePress (event) {
    if(event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      sendData()
    }
  }

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          placeholder="Message AI Chatbot"
          value={value}
          onChange={setFormValue}
          onKeyDown={handleEntrePress}
        />
      </div>
      <button className={styles.Button} onClick={sendData}>
        <SendIcon />
      </button>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
    </svg>
  );
}