import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewBoard } from "../actions/board.action";
import { withRouter } from "react-router-dom";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: "",
      boardSize: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getNewBoard(this.state.boardSize);
    // transfer to co GameBoard component
    const props = {
      name: this.state.name,
      level: this.state.level,
      boardSize: this.state.boardSize
    };
    this.props.history.push({
      pathname: "/game",
      props
    });
  }

  render() {
    const { name, level, boardSize } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <select name="level" onChange={this.handleChange}>
          <option value={{}} />
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <select name="boardSize" onChange={this.handleChange}>
          <option value={{}} />
          <option value="2">2 x 2</option>
          <option value="3">3 x 3</option>
          <option value="10">10 x 10</option>
          <option value="15">15 x 15</option>
          <option value="20">20 x 20</option>
        </select>
        <button type="submit">Start game</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getNewBoard: size => dispatch(getNewBoard(size))
});

export default withRouter(
  // to get history props
  connect(
    null,
    mapDispatchToProps
  )(UserForm)
);
