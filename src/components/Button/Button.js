import React, {Component} from 'react';

class Button extends Component {

//    ta funkcja wywołuje tego callbacka poniżej, to jest przekazywanie propsów do góry
   generateNumber = () => {
     this.props.generate();
   }
   
   
    render () {
        return (
            <button onClick={this.generateNumber}>
            Losuj liczbę
            </button>
        )
    }
}

export default Button;