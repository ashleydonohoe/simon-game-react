import React from "react";
import $ from "jquery";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPattern: "",
      movesUsed: "",
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
      gameStarted: true
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
      movesUsed: "",
      userMoves: "",
      moveCount: 0,
      computerTurn: true,
      userTurn: false
    });
  }

  beginRound() {
    // Show first animation and play sound
    const firstInSequence = "red";

    const updatedMoves = this.state.movesUsed.concat(firstInSequence);
    const updatedCount = this.state.moveCount + 1;

    // Add move to movesUsed
    this.setState({
      movesUsed: updatedMoves,
      moveCount: updatedCount
    })

    // Do animation and audio
    const spaceId = "#" + firstInSequence;
    const audioName = "sounds/" + firstInSequence + ".mp3";
    $(spaceId).addClass("flash");
    $("#file").attr("src", audioName);
    $("#audio")[0].load();
    $("#audio")[0].play();
  }

  gameSpacePressed(e) {
    console.log(e.target.id);

        // If user selects the correct space, add one to move count
        // Go to next move
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
            <source id="file" src="sounds/blue.mp3" type="audio/mpeg"/>
          </audio>
        </div>
      </div>
    )
  }
}

export default Gameboard;
