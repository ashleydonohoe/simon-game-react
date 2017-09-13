import React from "react";

class Gameboard extends React.Component {
  render() {
    return (
      <div className="gameboard">
        <div className="wrapper">
          <div className="green game-space"></div>
          <div className="red game-space"></div>
          <div className="yellow game-space"></div>
          <div className="blue game-space" game-space></div>
        </div>
      </div>
    )
  }
}

export default Gameboard;
