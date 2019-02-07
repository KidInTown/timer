import React from 'react';

 export default class Clock extends React.Component {
   render(){
    return(
      <div className = {this.props.classes.button.addButton} onClick = {this.props.timerCirckle}></div>
    );
  }
}
