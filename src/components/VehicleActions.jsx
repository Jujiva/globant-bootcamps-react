import React, {Component, Fragment} from 'react';
import ButtonGeneric from './Buttons.jsx';

class BuyButton extends React.Component {

  constructor(props){
    super(props);
  }
  render(){

    return (
      <Fragment>
        <ButtonGeneric text="Buy Vehicle" onClickHandler={this.props.onClickHandler}> </ButtonGeneric>
      </Fragment>
    );
  }
}


class VehicleActions extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
      <div id="actions">
        <p>Vehicles currently owned: {this.props.vehiclesBought}</p>
        <div>
          <BuyButton onClickHandler={this.props.buyVehicle}/>
        </div>
      </div>
    );

  }
}

export default VehicleActions
