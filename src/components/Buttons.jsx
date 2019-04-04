import React from 'react'

const ButtonGeneric = props => {
  return (
    <button onClick={props.onClickHandler}> 
      {props.text}
    </button>
  );
}

export default ButtonGeneric