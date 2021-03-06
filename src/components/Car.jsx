import React, {Component} from 'react';
import CarInfo from './CarInfo.jsx';
import CarActions from './CarActions.jsx';

class Vehicle extends Component {

  constructor(props) {

    super(props);
    this.state = {
      type: '',
      brand: "Toyota",
      model: 'Hilux',
      engine: '2.4 l D-4D',
      doors: 'Four',
      type: '4x4',
      vehiclessBought: 0
    };
    this.buyVehicle = this.buyVehicle.bind(this)
    this.sellVehicle = this.sellVehicle.bind(this)

  }

  buyVehicle = event => {
    this.setState({vehiclesBought: this.state.vehiclesBought += 1});
  }

  sellVehicle = event => {
    this.setState({vehiclesBought: (this.state.vehiclesBought > 0) ? this.state.vehiclesBought - 1 : 0})
  }


  render() {

    return (
      <div id="element">
        <VehicleInfo
          brand = {this.state.brand}
          model = {this.state.model}
          engine = {this.state.engine}
          doors = {this.state.doors}
          type = {this.state.type}
        />
      <VehicleActions
          vehiclesBought = {this.state.carsBought}
          buyVehicle = {this.buyCar}
          sellVehicle = {this.sellCar}
        />
      </div>
    )

  }
}

export default Car
