import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Form extends Component {

  constructor(){
    super()
    this.state = {
      logged: false,
      username: '',
      money: 0
    }
  }

  onSubmitHandler(event){
    const {name, value} = event.target
    this.setState({
      logged: true,
      [name]: value
    })
  }

  render () {
    return (
      <div>
        { this.state.logged && <Redirect to="/vehicles" />}
        <form onSubmit={this.onSubmitHandler}>
          Username: <input type="text" name="username"></input><br/>
          Amount of money: <input type="number" name="money" defaultValue="0"></input><br/>
          Do you own a vehicle?
          <label for="yes">Yes</label>
          <input type="radio" name="ownscar" id="yes" value="true"></input>
          <label for="no">No</label>
          <input type="radio" name="ownscar" id="no" value="true"></input>
          <input type="submit" value="Start"></input>
        </form>
      </div>
    );
  }
}

export default Form