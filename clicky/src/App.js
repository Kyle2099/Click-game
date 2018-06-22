import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
// import Counter from "./components/Counter";

// const App = () => <Counter />;


class App extends React.Component {
  state = {
    friends

  }
  

  render() {
    return (

      <Wrapper>
        <nav class="navbar"><ul>
          <li class="brand">
            <a href="/">Clicky Game</a>
          </li>
          <li class="">Click an image to begin!</li>
          <li>Score: 0 |
            Top Score: 0
          </li>
        </ul>
        </nav>
        <header class="header">
        <h1>Clicky Game!</h1>
        <h2>Click on a photo, but don't click the same one twice!</h2>
        </header>
        <body>

        </body>
        {this.state.friends.map(friend => (
          
          <FriendCard
          
          handleShuffle={this.handleShuffle}
            friend={this.friend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    )
  }
};






export default App;
