import React, { Component } from "react";
import SelectSizeMenu from './SelectSizeMenu';
import { connect } from "react-redux";
import { getNewBoard, getNewState } from "../actions/board.action";
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

  componentDidMount() {
    if (this.props.location.props) {
      this.props.getNewState();
      this.props.getNewBoard(this.props.location.props.boardSize, this.props.location.props.level);
      const props = {
        name: this.props.location.props.name,
        level: this.props.location.props.level,
        boardSize: this.props.location.props.boardSize
      };
      this.props.history.push({
        pathname: "/game",
        props
      });
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getNewBoard(this.state.boardSize, this.state.level);
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

  getLevelStyle(value) {
    return this.state.level === value ? 'level-button pushed-button' : 'level-button';
  }

  render() {
    const { name, level, boardSize } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name" className='form-name'>Name:</label>
        <input className='user-name-input'
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder='Name' autoFocus
        />
        <div className='level'>
          <div className='level-header'>Level:</div>
          <div className='buttons-container'>
            <button name='level' type='button' value='easy' className={this.getLevelStyle('easy')} onClick={this.handleChange} >easy</button>
            <button name='level' type='button' value='medium' className={this.getLevelStyle('medium')} onClick={this.handleChange} >medium</button>
            <button name='level' type='button' value='hard' className={this.getLevelStyle('hard')} onClick={this.handleChange}>hard</button>
          </div>
        </div>
        <div className='size'>
          <div className='size-header'>Size:</div>
          <div className='select-container'>
            <SelectSizeMenu name="boardSize" handleChange={this.handleChange} />
          </div>
        </div>
        <div>
          <button className={!level || !boardSize ? 'start-button start-button-disabled' : 'start-button'} type="submit" disabled={!level || !boardSize}>Start game</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getNewBoard: (size, level) => dispatch(getNewBoard(size, level)),
  getNewState: () => dispatch(getNewState())
});

export default withRouter(
  // to get history props
  connect(
    null,
    mapDispatchToProps
  )(UserForm)
);
