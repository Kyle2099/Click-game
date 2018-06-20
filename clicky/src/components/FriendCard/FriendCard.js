import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.image}</strong> {props.image}
        </li>
        <li>

        </li>
        <li>
         
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
