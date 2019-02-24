import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import WinMessage from "./WinMessage";
import { handleClick } from "../actions/board.action";
import {
  findRandomCell,
  checkWinner,
  findEmptyCells,
  findCell,
  minimax
} from "../reducers/utilFunc";
// import "../../public/index.css";
import "../index.css";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      tie: false
    };
  }

  componentDidUpdate() {
    debugger
    if (!this.state.gameWon) {
      if (checkWinner(this.props.board, this.props.lastTurn)) {
        this.setState({ gameWon: true });
      }
    }
    if (
      !this.state.gameWon &&
      !findEmptyCells(this.props.board).length &&
      !this.state.tie
    ) {
      this.setState({ tie: true });
    }
    if (
      this.props.computerTurn &&
      findEmptyCells(this.props.board).length
    ) {
      this.markCellByComputer();
    }
  }

  getBoardClass() {
    switch (this.props.location.props.boardSize) {
      case "2":
        return "board-2";
      case "3":
        return "board-3";
      case "10":
        return "board-10";
      case "15":
        return "board-15";
      case "20":
        return "board-20";
      default:
        return;
    }
  }

  markCellByComputer() {
    // const cell = findRandomCell(this.props.board);
    const board = this.props.board.slice();
    console.log('sliced board:', board);
    const cell = findCell(
      board,
      minimax(board, null, this.props.computerTurn)
    );
    console.log("new cell to go:", cell);
    const data = { id: cell.id, value: this.props.computerTurn ? false : true };
    console.log("new data:", data);
    // this.props.handleClick(data); // here handleClick from action creator !!
  }

  render() {
    const { board } = this.props;
    return (
      <div className="container">
        <h2>{`Player: ${this.props.location.props.name}`}</h2>
        <h3>{`Next turn: ${!this.props.computerTurn}`}</h3>
        <div className={`board ${this.getBoardClass()}`}>
          {this.state.gameWon && <WinMessage text={"win"} />}
          {this.state.tie && <WinMessage text={"tie"} />}
          {board.map(cell => {
            return (
              <Cell
                data={cell}
                computerTurn={this.props.computerTurn}
                handleClick={this.props.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
  lastTurn: state.lastTurn,
  computerTurn: state.computerTurn
});

const mapDispatchToProps = dispatch => ({
  handleClick: data => dispatch(handleClick(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
