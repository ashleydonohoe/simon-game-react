import React from "react";
import $ from "jquery";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPattern: "",
      movedUsed: "",
      userMoves: "",
      strictModeEnabled: false,
      gameStarted: false,
      moveCount: 0
    }

    this.gameSpacePressed = this.gameSpacePressed.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
    this.startPressed = this.startPressed.bind(this);
    this.strictModePressed = this.strictModePressed.bind(this);
    this.beginRound = this.beginRound.bind(this);
  }

  strictModePressed() {
    console.log("Strict Mode Pressed");
  }

  startPressed() {
    console.log("Start pressed");
    this.setUpGame();
    this.setState({
      gameStatred: true
    });

    this.beginRound();
  }

  setUpGame() {
    const possibleMoves = ["red", "blue", "green", "yellow"];
    const numberOfMoves = 20;
    let sequence = [];

    for(let i = 0; i < numberOfMoves; i++) {
      sequence.push(possibleMoves[Math.floor(Math.random() * possibleMoves.length)]);
    }

    this.setState({
      fullPattern: sequence,
      movedUsed: "",
      userMoves: "",
      moveCount: 0
    });
  }

  beginRound() {
    // Show first animation and play sound
    const firstInSequence = "blue";
    console.log(firstInSequence);
    const spaceId = "#" + firstInSequence;
    const audioName = firstInSequence + ".mp3";
    $(spaceId).addClass("flash");
    $("#file").attr("src", audioName);
    $("#audio")[0].play();


    // If user selects the correct space, add one to move count
  }

  gameSpacePressed(e) {
    console.log(e.target.id);
  }

  render() {
    return (
      <div className="container">
        <div className="game-controls">
          <div className="control-group">
            <p className="count-area">Count <span className="count-number">{this.state.moveCount}</span></p>
            <button onClick={this.startPressed} className="start-button">Start</button>
            <button onClick={this.strictModePressed} className="strict-mode-button">Strict</button>
          </div>
        </div>
        <div className="gameboard">
          <div className="wrapper">
            <div onClick={this.gameSpacePressed} id="green" className="green game-space"></div>
            <div onClick={this.gameSpacePressed} id="red" className="red game-space"></div>
            <div onClick={this.gameSpacePressed} id="yellow" className="yellow game-space"></div>
            <div onClick={this.gameSpacePressed} id="blue" className="blue game-space"></div>
          </div>
        </div>
        <div className="sound">
          <audio controls id="audio">
            <source id="file" src="" type="audio/mpeg"/>
          </audio>
        </div>
      </div>
    )
  }
}

export default Gameboard;
