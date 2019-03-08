import React, { Component } from "react";
import SelectSizeMenu from './SelectSizeMenu';
import { connect } from "react-redux";
import { getNewBoard } from "../actions/board.action";
import { withRouter } from "react-router-dom";
import Select from 'react-select';

const colourOptions = [
  { value: '', label: '', color: '#00B8D9', isFixed: true },
  { value: '2', label: '2 x 2', color: '#0052CC' },
  { value: '3', label: '3 x 3', color: '#5243AA' },
  { value: '10', label: '10 x 10', color: '#FF5630' },
  { value: '15', label: '15 x 15', color: '#FF8B00' },
  { value: '20', label: '20 x 20', color: '#FFC400' }
];


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
    // debugger
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
            <button className='level-button'>easy</button>
            <button className='level-button'>medium</button>
            <button className='level-button'>hard</button>
          </div>
        </div>
        <div>
          <div className='level-header'>Size:</div>
          <select name="boardSize" onChange={this.handleChange}>
            <option value={{}} />
            <option value="2">2 x 2</option>
            <option value="3">3 x 3</option>
            <option value="10">10 x 10</option>
            <option value="15">15 x 15</option>
            <option value="20">20 x 20</option>
          </select>
          <SelectSizeMenu name='boardSize'/>
          <button className='start-button' type="submit">Start game</button>
        </div>

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







// <Select name="boardSize" options={colourOptions} onChange={this.handleChange} value={this.state.boardSize}
