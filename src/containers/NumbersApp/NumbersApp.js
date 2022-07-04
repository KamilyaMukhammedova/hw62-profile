import React, {Component} from 'react';
import Circle from "../../components/NumbersComponents/Circle/Circle";
import './NumbersApp.css';

class NumbersApp extends Component {
  state = {
    numbers: [6, 17, 20, 34, 30]
  };

  getNewNumbers = () => {
    const numbersArrayCopy = [...this.state.numbers];
    numbersArrayCopy.length = 0;

    while (numbersArrayCopy.length < 5) {
      let randomNumber = Math.floor(Math.random() * (37 - 5)) + 5;
      if (numbersArrayCopy.indexOf(randomNumber) === -1) {
        numbersArrayCopy.push(randomNumber);
      }
    }

    numbersArrayCopy.sort((a, b) => {
      return a - b;
    });

    this.setState({
      numbers: numbersArrayCopy
    });
  }

  render() {
    const numbers = this.state.numbers.map(number => {
      return (
        <Circle
          key={number}
          number={number}
        />
      );
    });
    return (
      <div className="container text-center p-5">
        <div className="circlesArea">
          {numbers}
        </div>
        <div className="btnArea">
          <button type="button" className="btn btn-info" onClick={this.getNewNumbers}>New numbers</button>
        </div>
      </div>
    );
  }
}

export default NumbersApp;