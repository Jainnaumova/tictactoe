import React from "react";
import UserForm from "./UserForm";
import "../index.css";

export default props => {
  return (
    <div>
      <h1>TicTacToe</h1>
        <div className='rules-container'>
          <div className='rules-header'>
            <h2 className='rules-h2'>Rules</h2>
            <img src='https://habrastorage.org/files/5f8/ab3/830/5f8ab3830829471fbf2e76431ad98407.png'/>
            <p className='rules-paragraph'>Players alternate in placing a cross or zerous on an</p>
            <p className='rules-paragraph'>empty cells. The winner is the first player to get an</p>
            <p className='rules-paragraph'>unbroken row of 5 crosses or zerous horizontally,</p>
            <p className='rules-paragraph'>vertically, or diagonally</p>
          </div>
          <div className='userform-container'>
            <UserForm />
          </div>
        </div>
    </div>
  );
};

// <img src='http://media.148apps.com/screenshots/1015627367/us-iphone-2-gomoku-game.jpeg'/>
