import React, {Component} from 'react';
import CarInfo from './CarInfo.jsx';
import CarActions from './CarActions.jsx';

class Car extends Component {

  constructor(props) {

    super(props);
    this.state = {
      brand: "Toyota",
      model: 'Hilux',
      engine: '2.4 l D-4D',
      doors: 'Four',
      type: '4x4',
      carsBought: 0
    };
    this.buyCar = this.buyCar.bind(this)
    this.sellCar = this.sellCar.bind(this)
  
  }

  buyCar = event => {
    this.setState({carsBought: this.state.carsBought += 1});
  }
    
  sellCar = event => {
    this.setState({carsBought: (this.state.carsBought > 0) ? this.state.carsBought - 1 : 0})
  }

  
  render() {

    return (
      <div classname='element'>
        <CarInfo
          brand = {this.state.brand}
          model = {this.state.model}
          engine = {this.state.engine}
          doors = {this.state.doors}
          type = {this.state.type}
        />
        <CarActions 
          carsBought = {this.state.carsBought}
          buyCar = {this.buyCar}
          sellCar = {this.sellCar}
        />
      </div>
    )

  }
}

export default Car
