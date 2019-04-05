import React, {Component} from 'react';
import Vehicle from './components/Vehicle.jsx';
import styles from './components/css/List.css'

class List extends Component{

  constructor(props){
    super(props);
    this.state = {
      vehicles: []   
    }
  }

  componentDidMount(){
    fetch("https://5ca644893a082600142795c9.mockapi.io/vehicle?limit=10")
      .then( response => response.json() )
      .then( data => {
        this.setState({
          vehicles: data
        })
      })
  }

  render() {
    return (
      <div className="main">
        {this.state.vehicles.map(vehicle => 
          <Vehicle 
            key={vehicle.id}
            id={vehicle.id}
            vehicleName = {vehicle.vehicleName}
            brand = {vehicle.brand}
            model = {vehicle.model}
            engine = {vehicle.engine}
            doors = {vehicle.doors}
            type = {vehicle.type}
            img = {vehicle.img}
          />
        )}
      </div>
    )
  }

}

export default List