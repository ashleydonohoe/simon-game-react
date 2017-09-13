import React from "react";

class Gameboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="game-controls">
          <div className="control-group">
            <p className="count-area">Count <span className="count-number">5</span></p>
            <button className="start-button">Start</button>
            <button className="strict-mode-button">Strict</button>
          </div>
        </div>
        <div className="gameboard">
          <div className="wrapper">
            <div className="green game-space"></div>
            <div className="red game-space"></div>
            <div className="yellow game-space"></div>
            <div className="blue game-space" game-space></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gameboard;
