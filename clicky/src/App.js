import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friendsData from "./friends.json";
import "./App.css";
// import Counter from "./components/Counter";

// const App = () => <Counter />;


class App extends React.Component {
  
  
  state = {
    // friends: friendsData.sort(()=> Math.random() - 0.5),
    friends: friendsData.sort(()=> Math.random() - 0.5),
    score: 0,
    highScore: 0,
    message: "Click to begin"
  }

  checkHighScore() {
    if(this.state.score === 8){
      return this.state.score
    }else if(this.state.highScore === this.state.score){
      return this.state.score + 1
    }
    else{
      return this.state.highScore
    }
  }
  
  handleClick = id => {
    console.log(`this is our id ${id}`);
    let arrayCopy = this.state.friends.slice();

    console.log("this is our copy array: ", arrayCopy)

    // if(!id.clicked){
    //   console.log("clicked!");
    //   for(let i  = 0; i < arrayCopy.length; i++){        
    //     if(arrayCopy[i].id == id){
    //       console.log("we found a match");
    //       arrayCopy[i].clicked = true;
    //     }
    //   }


    for(let i = 0; i < arrayCopy.length; i++){
      if(arrayCopy[i].id == id){   
        console.log("***", arrayCopy[i]);
        console.log("this is the index of the clicked item in our array: " + i);  

          if(!arrayCopy[i].clicked){            
          return  this.handleCorrectGuess(i, arrayCopy);
          }else{
           return  this.handleIncorrectGuess(i);
          }
      }
    }
  
  }

  handleCorrectGuess(index, array){
    console.log("correct", index);
    // array[index].clicked = true;

  setTimeout(()=>{
    this.setState({
        score: this.state.score + 1,
        highScore: this.checkHighScore(),
        message: "You got a point!",
        friends: array.sort(()=> Math.random() - 0.5),
        friends: array
      });
  }, 1000);
   

  }

  handleIncorrectGuess(index){
    console.log("Incorrect", index)
    //  this.setState({
    //     score: 0,
    //     highScore: this.checkHighScore(),
    //     message: "Already been clicked!, please start over",
    //     // friends: friendsData.sort(()=> Math.random() - 0.5)
    //     friends: friendsData
    //   })
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  componentDidMount(){
    console.log(this.state);
  }

  render() {
    return (
      <div>
      <Wrapper>
        <nav className="navbar"><ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <li className="">Click an image to begin!</li>
          <li>Score: 0 |
            Top Score: 0
          </li>
        </ul>
        </nav>
        <header className="header">
        <h1>Clicky Game!</h1>
        <h2>Click on a photo, but don't click the same one twice!</h2>
        </header>
        <body>

        </body>
        {this.state.friends.map(friend => (
          
          <FriendCard
          
          // handleShuffle={friend.handleShuffle}
          handleClick={this.handleClick}
            // friend={freind.friend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked.toString}
          />
        ))}
      </Wrapper>
      </div>
    )
  }
};






export default App;
