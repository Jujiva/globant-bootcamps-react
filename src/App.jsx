import React, {Component} from 'react';
import Form from './Form.jsx';
import List from './List.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      boughtVehicles: 0,
    }
  }

  changeHandler = event => {
    this.setState({
      email: event.target.value
    });
  }

  render() {
    return (
      <Router>
        <div id="app">
          <main>
            <Route exact path="/" component={Form} />
            <Route path="/vehicles" component={List} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App
  