import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      brand: 'Toyota', 
      model: 'Hilux', 
      engine: '2.4 l D-4D', 
      doors: 'Four',
      type: '4x4'  
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.brand} {this.state.model}</h1>
        <p>{this.state.engine}</p>
        <p>{this.state.doors}</p>
        <p>Type: {this.state.type}</p>
      </div>
    );
  }
}

const Button = props => {
  return <button onClick={props.onClickHandler}>{props.text}</button>
}

const BuyButton = props => {
  return <Button text="Buy car" onClickHandler={props.onClickHandler} />
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { boughtCars: 0 }
  }

  buyCar = event => {
    this.setState(state => ({
      boughtCars: state.boughtCars + 1
    }));
  }

  render() {
    return (
      <div>
        <Car/>
        <BuyButton
            onClickHandler = {this.buyCar}
        />
        <p>You have bought {this.state.boughtCars} cars.</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
