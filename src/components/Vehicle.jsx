import React, {Component} from 'react';
import VehicleInfo from './VehicleInfo.jsx';
import VehicleActions from './VehicleActions.jsx';

class Vehicle extends Component {

  constructor(props) {

    super(props);
    this.state = {
      vehicleName: "",
      brand: "",
      model: "",
      engine: "",
      doors: "",
      type: "",
      img: "",
      vehiclesBought: 0
    };
    this.buyVehicle = this.buyVehicle.bind(this)

  }

  buyVehicle = event => {
    this.setState({vehiclesBought: this.state.vehiclesBought += 1});
  }

  componentDidMount(){
    this.setState(this.props)
  }

  

  render() {

    return (
      <div id="element">
        <VehicleInfo
          vehicleName = {this.state.vehicleName}
          brand = {this.state.brand}
          model = {this.state.model}
          engine = {this.state.engine}
          doors = {this.state.doors}
          type = {this.state.type}
          img = {this.state.img}
        />
       <VehicleActions
          vehiclesBought = {this.state.vehiclesBought}
          buyVehicle = {this.buyVehicle}
        />
      </div>
    )

  }
}

export default Vehicle
