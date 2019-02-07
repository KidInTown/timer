import React from 'react';

 export default class SetTimeButton extends React.Component {
   render(){
    return(
      <div tabIndex = "0" className = {this.props.classes.button.classSet} onClick = {this.props.setTime}></div>
    );
  }
}
