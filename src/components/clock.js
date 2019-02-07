import React from 'react';
import AddTimerButton from './buttons/AddTimerButton';

 export default class Clock extends React.Component {
   render(){
    return(
      <div className = {this.props.classes.clock.clockContainer}>
        <div className = {this.props.classes.input.class}>
          <div onWheel = {this.props.inputTimeMin}
          onScroll = {this.props.inputTimeMin}>{this.props.minutes}</div>
          <div>:</div>
          <div onWheel = {this.props.inputTimeSec}
          onScroll = {this.props.inputTimeSec}>{this.props.seconds}</div>
        </div>
      </div>
    );
  }
}
