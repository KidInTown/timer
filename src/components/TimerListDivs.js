import React from "react";

export default class TimerListDivs extends React.Component{

    complete = (id) =>{
      console.log(id.target.id)

      var i = id.target.id
      let state = this.props.timerList[i].completed;

      if(state){
        this.setState({state: false})
        this.props.timerList[i].completed = false
        localStorage.setItem('TimerList', JSON.stringify(this.props.timerList));
      }
      else{
        this.setState({state: true})
        this.props.timerList[i].completed = true
        localStorage.setItem('TimerList', JSON.stringify(this.props.timerList));
      }
    }

    delete = (id) =>{
      var i = id.target.id
      let state = true;
      this.props.timerList.splice(i, 1);
      (state) ? this.setState({state: false}) : this.setState({state: true})
      localStorage.setItem('TimerList', JSON.stringify(this.props.timerList))
    }

    show = (id) =>{
      var i = id.target.id
      document.getElementsByName('delete')[i].className = 'delete';
      document.getElementsByName('edit')[i].className = 'edit';
    }

    hide = (id) =>{
      var i = id.target.id
      document.getElementsByName('delete')[i].className = 'hide';
      document.getElementsByName('edit')[i].className = 'hide';
    }

    render(){
      return(
        this.props.timerList.map((item, i) => {
          return(
              <li value = {this.props.timerList[i].id} key = {i} id = {i} value = {i}
              onMouseOver = {this.show}
              onMouseLeave = {this.hide}>
                <div className = "size" key = {i+100} id = {i} value = {i}
                onClick = {this.props.choseTime}>{this.props.timerList[i].title}</div>
                <span id = {i}>{this.props.timerList[i].minutes + ":" + this.props.timerList[i].seconds}
                </span>
                <div className = "hide" name = 'edit' id = {i} key = {i+200} id = {i}
                 onClick = {this.props.edit}></div>
                <div className = "hide" name = 'delete' id = {i} key = {i+300} id = {i}
                 onClick = {this.delete}></div>
              </li>

          )
          }
        )
      )
    }
  }
