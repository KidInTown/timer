import React from 'react';
import TimerListDivs from './TimerListDivs';

export default class TimerList extends React.Component {

  render(){
    return(
      <div className = "timer-list">
          <div className = {this.props.classes.timerList.overflow}>
            <input type = 'text' id = "input" placeholder = "Add timer..."
            onKeyDown = {this.props.save}/>
            <hr />
            <ul className = "todo-list">
              <TimerListDivs timerList = {this.props.timerList}
              choseTime = {this.props.choseTime}
              edit = {this.props.edit} />
            </ul>
          </div>
      </div>
    )
  }
}
