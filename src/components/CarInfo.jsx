import React, {Component} from 'react';

class CarInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div classname='CarInfo'>
        <h1>{this.props.brand} {this.props.model}</h1>
        <p>{this.props.engine}</p>
        <p>{this.props.doors}</p>
        <p>Type: {this.props.type}</p>
      </div>
    );
  }
}

export default CarInfo
