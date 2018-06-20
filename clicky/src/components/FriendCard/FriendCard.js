import React from "react";
import "./FriendCard.css";

// const FriendCard = props => (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//         </li>
//         <li>

//         </li>
//         <li>
         
//         </li>
//       </ul>
//     </div>
//   </div>
// );
const FriendCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
