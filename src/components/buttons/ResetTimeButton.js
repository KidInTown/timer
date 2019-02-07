import React from 'react';

 export default class ResetTimeButton extends React.Component {
   render(){
    return(
      <div onClick = {this.props.resetTime} className = "btn btn-style reset"></div>
    );
  }
}
