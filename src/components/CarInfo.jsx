import React, {Component} from 'react';

class VehicleInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div id="vehicleinfo">
        <h1>{this.props.brand} {this.props.model}</h1>
        <p>Type: {this.props.type}</p>
        <p>{this.props.engine}</p>
        <p>{this.props.doors}</p>
        <p>Type: {this.props.type}</p>
      </div>
    );
  }
}

export default VehicleInfo
