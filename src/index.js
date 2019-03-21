import React from 'react';
import ReactDOM from 'react-dom';

function CarInfo() {
  return(
    <div>
      <p>This is a car.</p>
      <ul>
        <li>This is its type.</li>
        <li>This is its color.</li>
        <li>This is its capacity.</li>
        <li>This is the engine specifications.</li>
      </ul>
    </div>
  )

}
ReactDOM.render(<CarInfo />, document.getElementById('root'));
