import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);

  function handleChange(event) {
    setWasSubmitted(false);
    setPlayerName(event.target.value);
  }

  function hangleClick() {
    setWasSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {wasSubmitted ? playerName : ""}</h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={hangleClick}>Set Name</button>
      </p>
    </section>
  );
}
