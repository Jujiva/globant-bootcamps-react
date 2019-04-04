import React, {Component, Fragment} from 'react';
import ButtonGeneric from './Buttons.jsx';

class BuyButton extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    
    return (
      <Fragment>
        <ButtonGeneric text="Buy Car" onClickHandler={this.props.onClickHandler}> </ButtonGeneric>
      </Fragment>     
    );
  }
}


class SellButton extends React.Component {

  constructor(props){
    super(props);
  }
  render(){

    return (
      <Fragment> 
        <ButtonGeneric text="Sell Car" onClickHandler={this.props.onClickHandler}></ButtonGeneric>
      </Fragment>
    );
  }
}



class CarActions extends Component {

  constructor(props){
    super(props)
  }


  render(){
    
    return(
      <div>
        <p>Cars currently owned: {this.props.carsBought}</p>
        <div>
          <BuyButton onClickHandler={this.props.buyCar}/>
          <br/>
          <SellButton onClickHandler={this.props.sellCar}/>
        </div>
      </div>
    );

  }
}

export default CarActions