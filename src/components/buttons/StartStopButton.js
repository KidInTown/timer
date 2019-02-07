import React from 'react';

 export default class StartStopButton extends React.Component {

   render(){
    return(
      <div onClick = {(event) => { this.props.timer(); this.props.toggleClass();}} className = {this.props.classes.button.classStartStop}></div>
    );
  }
}
