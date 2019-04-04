import React, {Component} from 'react';
import Car from './components/Car.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { boughtCars: 0 }
  }

  render() {
    return (
      <div classname='App'>
        <Car carsOwned = {this.state.boughtCars} />
      </div>
    );
  }
}

export default App
  