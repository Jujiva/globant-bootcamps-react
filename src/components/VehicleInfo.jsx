import React, {Component} from 'react';
import styles from './css/VehicleInfo.css'

class VehicleInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="vehicleinfo">
        <div className="headercontainer">
          <h1>{this.props.brand} {this.props.model}</h1>
        </div>
        
        <div className="infocontainer">
          <p>Vehicle: {this.props.vehicleName}</p><br/>
          <p>Engine specs: {this.props.engine}</p><br/>
          <p>Doors: {this.props.doors}</p><br/>
          <p>Type: {this.props.type}</p><br/>
        </div>
      </div>
    );
  }
}

export default VehicleInfo
