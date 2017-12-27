import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import SecondPage from './page-2';
import './pages.css';

class IndexPage extends Component {
  constructor() {
    super();
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
      allCombos: [],
      addedCombos: [],
      chosenComboIndex: null,
      // column array example: 
      // index 0 = max, index 1 = winner, index 2 = temp, index 3 = blue, index 4 = green, index 5 = orange, index 6 = yellow
      col2: [3, null, null, null, null, null, null],
      col3: [5, null, null, null, null, null, null],
      col4: [7, null, null, null, null, null, null],
      col5: [9, null, null, null, null, null, null],
      col6: [11, null, null, null, null, null, null],
      col7: [13, null, null, null, null, null, null],
      col8: [11, null, null, null, null, null, null],
      col9: [9, null, null, null, null, null, null],
      col10: [7, null, null, null, null, null, null],
      col11: [5, null, null, null, null, null, null],
      col12: [3, null, null, null, null, null, null]
    }
    this.handlePlayerSelectedOption = this.handlePlayerSelectedOption.bind(this);
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

  handlePlayerSelectedOption(event) {
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
    const comboPerms = (array) => {
      const pairPermute = (arr, memo = []) => {
        let i, current;
        for (i = 0; i < arr.length; i++) {
          memo.push(arr[i]);
        }
        this.state.allCombos.unshift(memo);
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
    }
    comboPerms(this.state.diceRolls);
    const comboAddition = (arr) => {
      this.state.addedCombos.push(arr[0][0] + arr[0][1]);
      this.state.addedCombos.push(arr[0][2] + arr[0][3]);
      this.state.addedCombos.push(arr[1][0] + arr[1][1]);
      this.state.addedCombos.push(arr[1][2] + arr[1][3]);
      this.state.addedCombos.push(arr[2][0] + arr[2][1]);
      this.state.addedCombos.push(arr[2][2] + arr[2][3]);
    }
    comboAddition(this.state.allCombos);
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
            onChange={this.handlePlayerSelectedOption}
          />
          2
        </label>
        <label className="radioButtons">
          <input
            className="radioText"
            type="radio"
            value="3"
            checked={this.state.selectedOption === '3'}
            onChange={this.handlePlayerSelectedOption}
          />
          3
        </label>
        <label className="radioButtons">
          <input
            className="radioText"
            type="radio"
            value="4"
            checked={this.state.selectedOption === '4'}
            onChange={this.handlePlayerSelectedOption}
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
      diceCombos = 
        <div>
          <div  className="combos">
            <h4>You rolled: {rolledNums[0]}  {rolledNums[1]}  {rolledNums[2]}  {rolledNums[3]}</h4>
            <h3>Please choose a dice combo:</h3>
            <p>Combo 1:</p>
            <p>{this.state.allCombos[0][0]}  {this.state.allCombos[0][1]}  /  {this.state.allCombos[0][2]}  {this.state.allCombos[0][3]}</p>
            <form className="comboButton" onSubmit={this.handleComboSubmit1}><button type="submit">{this.state.addedCombos[0]}   &   {this.state.addedCombos[1]}</button></form>
            <p>Combo 2:</p>
            <p>{this.state.allCombos[1][0]}  {this.state.allCombos[1][1]}  /  {this.state.allCombos[1][2]}  {this.state.allCombos[1][3]}</p>
            <form onSubmit={this.handleComboSubmit2}><button type="submit">{this.state.addedCombos[2]}   &   {this.state.addedCombos[3]}</button></form>
            <p>Combo 3:</p>
            <p>{this.state.allCombos[2][0]}  {this.state.allCombos[2][1]}  /  {this.state.allCombos[2][2]}  {this.state.allCombos[2][3]}</p>
            <form onSubmit={this.handleComboSubmit3}><button type="submit">{this.state.addedCombos[4]}   &   {this.state.addedCombos[5]}</button></form>
          </div>
        </div>
      let column2 = <p>column 2: {this.state['col2'][2]}{this.state['col2'][3]}{this.state['col2'][4]}{this.state['col2'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col2'][1]) column2 = <h4>The winner of column 2 is: {this.state[1]}</h4>;
      let column3 = <p>column 3: {this.state['col3'][2]}{this.state['col3'][3]}{this.state['col3'][4]}{this.state['col3'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col3'][1]) column3 = <h4>The winner of column 3 is: {this.state[1]}</h4>;
      let column4 = <p>column 4:{this.state['col4'][2]}{this.state['col4'][3]}{this.state['col4'][4]}{this.state['col4'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col4'][1]) column4 = <h4>The winner of column 4 is: {this.state[1]}</h4>;
      let column5 = <p>column 5:{this.state['col5'][2]}{this.state['col5'][3]}{this.state['col5'][4]}{this.state['col5'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col5'][1]) column5 = <h4>The winner of column 5 is: {this.state[1]}</h4>;
      let column6 = <p>column 6:{this.state['col6'][2]}{this.state['col6'][3]}{this.state['col6'][4]}{this.state['col6'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col6'][1]) column6 = <h4>The winner of column 6 is: {this.state[1]}</h4>;
      let column7 = <p>column 7:{this.state['col7'][2]}{this.state['col7'][3]}{this.state['col7'][4]}{this.state['col7'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col7'][1]) column7 = <h4>The winner of column 7 is: {this.state[1]}</h4>;
      let column8 = <p>column 8:{this.state['col8'][2]}{this.state['col8'][3]}{this.state['col8'][4]}{this.state['col8'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col8'][1]) column8 = <h4>The winner of column 8 is: {this.state[1]}</h4>;
      let column9 = <p>column 9:{this.state['col9'][2]}{this.state['col9'][3]}{this.state['col9'][4]}{this.state['col9'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col9'][1]) column9 = <h4>The winner of column 9 is: {this.state[1]}</h4>;
      let column10 = <p>column 10:{this.state['col10'][2]}{this.state['col10'][3]}{this.state['col10'][4]}{this.state['col10'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col10'][1]) column10 = <h4>The winner of column 10 is: {this.state[1]}</h4>;
      let column11 = <p>column 11:{this.state['col11'][2]}{this.state['col11'][3]}{this.state['col11'][4]}{this.state['col11'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col11'][1]) column11 = <h4>The winner of column 11 is: {this.state[1]}</h4>;
      let column12 = <p>column 12:{this.state['col12'][2]}{this.state['col12'][3]}{this.state['col12'][4]}{this.state['col12'][5]}{this.state['col2'][6]}</p>;
      if (this.state['col12'][1]) column12 = <h4>The winner of column 12 is: {this.state[1]}</h4>;

      gameBoard = 
        <div>
          {this.state.chosenComboIndex}
          {column2}
          {column3}
          {column4}
          {column5}
          {column6}
          {column7}
          {column8}
          {column9}
          {column10}
          {column11}
          {column12}
        </div>
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