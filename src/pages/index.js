import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
// import ReactBoard from 'react-board';

import SecondPage from './page-2';
import './pages.css';

class IndexPage extends Component {
  constructor() {
    super();
    // this.board = [
    //   [a11, a12, a13],
    //   [b9, b10,b11, b12, b13],
    //   [c7, c8, c9, c10, c11, c12, c13],
    //   [d5, d6, d7, d8, d9, d10, d11, d12, d13],
    //   [e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13],
    //   [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13],
    //   [g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13],
    //   [h5, h6, h7, h8, h9, h10, h11, h12, h13],
    //   [i7, i8, i9, i10, i11, i12, i13],
    //   [j9, j10, j11, j12, j13],
    //   [k11, k12, k13]
    // ];
    this.state = {
      selectedOption: null,
      numOfPlayers: null,
      1: null,
      2: null,
      3: null,
      4: null,
      start: false,
      currentPlayer: null,
      rolled: false,
      diceRolls: [],
      chosenComboIndex: null,
      // num2: {},
      // num3: {},
      // num4: {},
      // num5: {},
      // num6: {},
      // num7: {},
      // num8: {},
      // num9: {},
      // num10: {},
      // num11: {},
      // num12: {},
      // white: {}
    }
    this.handleselectedOption = this.handleselectedOption.bind(this);
    this.onSelect1 = this.onSelect1.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
    this.onSelect3 = this.onSelect3.bind(this);
    this.onSelect4 = this.onSelect4.bind(this);
    this.handleStartFormSubmit = this.handleStartFormSubmit.bind(this);
    this.handleRollDiceSubmit = this.handleRollDiceSubmit.bind(this);
    this.handleComboSubmit1 = this.handleComboSubmit1.bind(this);
    this.handleComboSubmit2 = this.handleComboSubmit2.bind(this);
    this.handleComboSubmit3 = this.handleComboSubmit3.bind(this);
  }

  handleselectedOption(event) {
    this.setState({
      selectedOption: event.target.value,
      numOfPlayers: event.target.value
    });
  }
  onSelect1(event) {
    if (Object.values(this.state).includes(event.value)) {
      alert('Must choose a unique color per player!');
    } else {
      this.setState({
        1: event.value
      });
    }
  }
  onSelect2(event) {
    if (Object.values(this.state).includes(event.value)) {
      alert('Must choose a unique color per player!');
    } else {
      this.setState({
        2: event.value
      });
    }
  }
  onSelect3(event) {
    if (Object.values(this.state).includes(event.value)) {
      alert('Must choose a unique color per player!');
    } else {
      this.setState({
        3: event.value
      });
    }
  }
  onSelect4(event) {
    if (Object.values(this.state).includes(event.value)) {
        alert('Must choose a unique color per player!');
    } else {
      this.setState({
        4: event.value
      });
    }
  }
  handleStartFormSubmit(event) {
    event.preventDefault();
    let count = 0;
    const startColor = this.state['1'];
    for (let i = 1; i <= this.state.numOfPlayers; i++) {
      i = i.toString();
      if (this.state[i]) count++;
    }
    if (count == this.state.numOfPlayers) {
      this.setState({
        start: true,
        currentPlayer: startColor
      });
    } else {
      alert('Please choose a unique color for each player before starting the game!')
    }
  }
  handleRollDiceSubmit(event) {
    event.preventDefault();
    this.state.diceRolls.push(Math.floor(Math.random() * 6) + 1);
    this.state.diceRolls.push(Math.floor(Math.random() * 6) + 1);
    this.state.diceRolls.push(Math.floor(Math.random() * 6) + 1);
    this.state.diceRolls.push(Math.floor(Math.random() * 6) + 1); 
    this.setState({
      rolled: true
    });
  }
  handleComboSubmit1(event) {
    event.preventDefault();
    this.setState({
      chosenComboIndex: 1
    });
  }
  handleComboSubmit2(event) {
    event.preventDefault();
    this.setState({
      chosenComboIndex: 2
    });
  }
  handleComboSubmit3(event) {
    event.preventDefault();
    this.setState({
      chosenComboIndex: 3
    });
  }

  render() {
    const comboPerms = (array) => {
      const result = [];
      const pairPermute = (arr, memo = []) => {
        let i, current;
        for (i = 0; i < arr.length; i++) {
          memo.push(arr[i]);
        }
        result.unshift(memo);
      }
      pairPermute(array);
      let temp = array[1];
      array[1] = array[2];
      array[2] = temp;
      pairPermute(array);
      temp = array[1];
      array[1] = array[3];
      array[3] = temp;
      pairPermute(array);
      return result;
    }

    const comboAddition = (arr) => {
      const result = [];
      result.push(arr[0][0] + arr[0][1]);
      result.push(arr[0][2] + arr[0][3]);
      result.push(arr[1][0] + arr[1][1]);
      result.push(arr[1][2] + arr[1][3]);
      result.push(arr[2][0] + arr[2][1]);
      result.push(arr[2][2] + arr[2][3]);
      return result;
    }

    let player1Color = <h3 className="colorChoiceText">Please choose player 1 color</h3>;
    let player2Color = <h3 className="colorChoiceText">Please choose player 2 color</h3>;
    let player3Color = <h3 className="colorChoiceText">Please choose player 3 color</h3>;
    let player4Color = <h3 className="colorChoiceText">Please choose player 4 color</h3>;
    if (this.state['1']) player1Color = <p>Player 1 color is : {this.state[1]}</p>;
    if (this.state['2']) player2Color = <p>Player 2 color is : {this.state[2]}</p>;
    if (this.state['3']) player3Color = <p>Player 3 color is : {this.state[3]}</p>;
    if (this.state['4']) player4Color = <p>Player 4 color is : {this.state[4]}</p>;

    const options = ['blue', 'green', 'orange', 'yellow'];
    const playerColors = [];
    const playerColorsTemplate = [
      <div>
        <hr/>
        {player1Color}
        <Dropdown className="dropdown" options={options} onChange={this.onSelect1} value={this.state['1']} />
      </div>,
      <div>
        {player2Color}
        <Dropdown className="dropdown" options={options} onChange={this.onSelect2} value={this.state['2']} />
      </div>,
      <div>
        {player3Color}
        <Dropdown className="dropdown" options={options} onChange={this.onSelect3} value={this.state['3']} />
      </div>,
      <div>
        {player4Color}
        <Dropdown className="dropdown" options={options} onChange={this.onSelect4} value={this.state['4']} />
      </div>
    ];
    for (let i = 0; i < this.state.numOfPlayers; i++) {
      playerColors.push(playerColorsTemplate.shift());
    }

    let startGame;
    if (this.state.numOfPlayers > 0) startGame = <form onSubmit={this.handleStartFormSubmit}><button type="submit">Start game!</button></form>

    let setNewGame = 
      <div>
        <p id="numPlayersLabel">Number of Players:</p>
        <label className="radioButtons">
          <input
            className="radioText"
            type="radio"
            value="2"
            checked={this.state.selectedOption === '2'}
            onChange={this.handleselectedOption}
          />
          2
        </label>
        <label className="radioButtons">
          <input
            className="radioText"
            type="radio"
            value="3"
            checked={this.state.selectedOption === '3'}
            onChange={this.handleselectedOption}
          />
          3
        </label>
        <label className="radioButtons">
          <input
            className="radioText"
            type="radio"
            value="4"
            checked={this.state.selectedOption === '4'}
            onChange={this.handleselectedOption}
          />
          4
        </label>
        <br/>
        {playerColors[0]}
        {playerColors[1]}
        {playerColors[2]}
        {playerColors[3]}
        <br/>
        {startGame}
      </div>

    let gameHeader, rollDice, diceCombos, gameBoard, rollOrEnd;

    if (this.state.start) {
      setNewGame = null;
      gameHeader = 
        <div>
          <h3>Current player: {this.state.currentPlayer}</h3>
          <hr/>
        </div>
      rollDice = 
        <div>
          <form onSubmit={this.handleRollDiceSubmit}><button type="submit">Roll Dice</button></form>
        </div>
    }

    if (this.state.rolled) {
      rollDice = null;
      const rolledNums = this.state.diceRolls;
      const allCombos = comboPerms(rolledNums);
      const addedCombos = comboAddition(allCombos);
      diceCombos = 
        <div>
          <div  className="combos">
            <h4>You rolled: {rolledNums[0]}  {rolledNums[1]}  {rolledNums[2]}  {rolledNums[3]}</h4>
            <h3>Please choose a dice combo:</h3>
            <p>Combo 1:</p>
            <p>{allCombos[0][0]}  {allCombos[0][1]}  /  {allCombos[0][2]}  {allCombos[0][3]}</p>
            <form className="comboButton" onSubmit={this.handleComboSubmit1}><button type="submit">{addedCombos[0]}   &   {addedCombos[1]}</button></form>
            <p>Combo 2:</p>
            <p>{allCombos[1][0]}  {allCombos[1][1]}  /  {allCombos[1][2]}  {allCombos[1][3]}</p>
            <form onSubmit={this.handleComboSubmit2}><button type="submit">{addedCombos[2]}   &   {addedCombos[3]}</button></form>
            <p>Combo 3:</p>
            <p>{allCombos[2][0]}  {allCombos[2][1]}  /  {allCombos[2][2]}  {allCombos[2][3]}</p>
            <form onSubmit={this.handleComboSubmit3}><button type="submit">{addedCombos[4]}   &   {addedCombos[5]}</button></form>
{/* 
            <form onSubmit={this.handleComboSubmit2}><button type="submit">{allCombos[1]}</button></form>
            <form onSubmit={this.handleComboSubmit3}><button type="submit">{allCombos[2]}</button></form> */}
          </div>
        </div>
      gameBoard = 
        <div>This is the where game board will go</div>
    }
    
    if (this.state.chosenComboIndex) {
      diceCombos = null;
      rollOrEnd =
        <div>
          <button>Roll again</button>
          <button>End Turn</button>
        </div>
    }

    return (
      <div>
        {setNewGame}
        {gameHeader}
        {rollDice}
        {diceCombos}
        {gameBoard}
        {rollOrEnd}
        <div className="endTurn"></div>
      </div>
    );
  }
}

export default IndexPage;