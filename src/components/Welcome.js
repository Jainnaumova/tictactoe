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
            <img src='https://habrastorage.org/files/5f8/ab3/830/5f8ab3830829471fbf2e76431ad98407.png' alt='background'/>
            <p className='rules-paragraph'>Let's get 5 crosses horizontally, vertically, or diagonally</p>
          </div>
          <div className='userform-container'>
            <UserForm />
          </div>
        </div>
    </div>
  );
};
