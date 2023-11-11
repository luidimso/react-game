import { useState, useRef } from "react";

export default function Player() {
  const inputPlayerName = useRef();

  const [playerName, setPlayerName] = useState("");

  function hangleClick() {
    setPlayerName(inputPlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : ""}</h2>
      <p>
        <input ref={inputPlayerName} type="text" />
        <button onClick={hangleClick}>Set Name</button>
      </p>
    </section>
  );
}
