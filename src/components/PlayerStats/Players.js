import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./Players.css";

const Players = (props) => {
  const { name, age, gender, country, image, salary } = props.player;
  return (
    <div className="player-card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="playersstats">
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Sex: {gender}</h3>
        <h4>Country: {country}</h4>
        <h4>Salary:{salary}</h4>

        <Button
          onClick={() => props.handlePlayers(props.player)}
          className="btn btn-dark"
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </div>
    </div>
  );
};

export default Players;
