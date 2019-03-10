import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import WinMessage from "./WinMessage";
import { handleClick, getNewBoard } from "../actions/board.action";
import { Link, withRouter } from "react-router-dom";
import { checkWinner } from '../utils/checkingWinner';
import {
  findRandomCell,
  findEmptyCells,
  findCell,
  minimax,
} from "../utils/utilFunc";

import { turnGenerator } from '../ai/turnGenerator';
import "../index.css";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      tie: false,
    };
    this.tryAgain = false;
    this.handleClick = this.handleClick.bind(this);
    this.handleTryAgain = this.handleTryAgain.bind(this);
  }

  componentDidUpdate() {
    // debugger
    if (!this.state.gameWon && !this.tryAgain) {
      if (checkWinner(this.props.board, this.props.lastTurn)) {
        this.gameWon = checkWinner(this.props.board, this.props.lastTurn);
        this.setState({ gameWon: true });
      }
    }
    if (
      !this.gameWon &&
      !findEmptyCells(this.props.board).length &&
      !this.state.tie && !this.tryAgain
    ) {
      this.setState({ tie: true });
    }

    if (
      !this.gameWon &&
      !this.tryAgain &&
      this.props.computerTurn &&
      findEmptyCells(this.props.board).length
    ) {
      // this.markCellByComputer();
      setTimeout(() => {
        this.markCellByComputer()
      }, 800)
    }
    if (this.tryAgain) {
      this.tryAgain = false;
    }
  }

  getBoardClass() {
    switch (this.props.location.props.boardSize) {
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
    debugger
    const board = this.props.board.slice();
    const cell = turnGenerator(board, this.props.location.props.level);
    debugger
    const data = { id: cell.id, value: this.props.computerTurn ? false : true };
    this.props.handleClick(data); // handleClick from action creator
  }

  handleClick(data) {
    if (this.state.gameWon) return;
    this.props.handleClick(data);
  }

  nameToUpperCase(input){
    return input.toUpperCase()
  }

  handleTryAgain() {
    this.tryAgain = true;
    this.props.getNewBoard(this.props.location.props.boardSize, this.props.location.props.level);
  }

  chooseMessage() {
    if (!this.state.tie) {
      if (this.state.gameWon) {
        if (!this.props.lastTurn.value) {
          return (<WinMessage text={"congratulations!"} />);
        } else {
          return (<WinMessage text={"game over"} />);
        }
      }
    } else {
      return (<WinMessage text={"tie"} />);
    }
  }

  render() {
    debugger
    const { board } = this.props;
    return (
      <div>
        <h1>TicTacToe</h1>
        <div className="container">
          <div className='name-container'>
            <h2 className="player-name">{`Player: ${this.nameToUpperCase(this.props.history.location.props.name)}`}</h2>
            {!this.props.computerTurn ? (<h3>{`Next turn: ${this.nameToUpperCase(this.props.history.location.props.name)}`}</h3>) : (<h3>Next turn: Computer</h3>)}
          </div>
          <div className={`board ${this.getBoardClass()}`}>
            {this.chooseMessage()}
            {board.map((cell, i) => {
              return (
                <Cell
                  data={cell}
                  key={i}
                  computerTurn={this.props.computerTurn}
                  handleClick={this.handleClick}
                />
              );
            })}
          </div>
          <div className='buttons-group'>
            <div>
              <Link to='/'>
                <button className='board-button'>Back</button>
              </Link>
            </div>
            <div>
              <button className='board-button' onClick={this.handleTryAgain}>Try again</button>
            </div>
          </div>
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
  handleClick: data => dispatch(handleClick(data)),
  getNewBoard: (size, level) => dispatch(getNewBoard(size, level))
});

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard))
