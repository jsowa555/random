import React, {Component} from 'react';

import Display from '../Display/Display';
import Button from '../Button/Button';
import '../Random/Random.css';

class Random extends Component {
    // czysty stan bez propsów
    constructor() {
        super();
// state jest przechowalnią dla naszych zmiennych
        this.state = {
            randomNumber: 0
             }
    }
generateRandomNumber = () => {
   const newNumber = Math.random();

   this.setState((prevState) => ({
    randomNumber: prevState.randomNumber + newNumber
   }));
}
// DidMount - czyli po załadowaniu strony
componentDidMount () {
    this.generateRandomNumber();
}

    render () {
        return (
            <div className='random-container'>
              <Display number={this.state.randomNumber}/>
              <Button generate={this.generateRandomNumber}/>
            </div>
        )
    }
}

export default Random;