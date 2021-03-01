import React, { useState } from "react";
import data from "../../data/data.json";
import Players from "../PlayerStats/Players";
import "./Player.css";
// import logo from "../../images/logo.png"

const Player = () => {
  const playerData = data;

  function handlePlayers(playerDetails) {
    console.log("player added", playerDetails);
    const newPlayer = [...selectedPlayer, playerDetails];
    setSeleectedPlayer(newPlayer);
  }
  const [player, setPlayer] = useState(playerData);
  const [selectedPlayer, setSeleectedPlayer] = useState([]);
  const total = selectedPlayer.reduce(
    (total, amount) => total + amount.salary,
    0
  );

  return (
    <div className="players-container">
      <div className="all-players">
        {player.map((participant) => (
          <Players player={participant} handlePlayers={handlePlayers}></Players>
        ))}
      </div>
      <div className="player-list">
        <h1>Player Selected:{selectedPlayer.length}</h1>
        <h1>Total Budget: {total}</h1>
        <div>
          {selectedPlayer.map((player) => (
            <li>{player.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;
