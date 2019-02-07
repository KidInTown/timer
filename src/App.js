import React from 'react';
import './App.css';
import Clock from './components/clock';
import Circle from './components/circle';
import StartStopButton from './components/buttons/StartStopButton';
import SetTimeButton from './components/buttons/SetTimeButton';
import ResetTimeButton from './components/buttons/ResetTimeButton';
import AddTimerButton from './components/buttons/AddTimerButton';
import TimerList from './components/TimerList';

var timerList = [];


if (JSON.parse(localStorage.getItem('TimerList'))){
  timerList = JSON.parse(localStorage.getItem('TimerList'));
}

export default class App extends React.Component {

  circle = {
            cx: 25,
            cy: 25,
            r: 20,
            fill: "none",
            stroke: "white",
            strokeWidth: 2.2,
            strokeDashoffset: [126],
            strokeDasharray: [126, 126],
           }

  classes = {
            button: {
              classStartStop: "btn btn-style run",
              classSet: "btn btn-style set-time set-time-press",
              addButton: "add-button-close",
            },

            input : {
              class: "clock circle-transition time-input inner-shadow",
            },

            circle : {
              class: "circle-transition hide"
            },

            timerList: {
              class: "timerList",
              overflow: "overflow-close",
            },

            clock: {
              clockContainer: "clock-container"
            },

            timerCirckle: "timerCirckle scale",
  }

  state = {
           isRun: false,
           isInput: true,
           seconds: '00',
           minutes: '00',
           timeLeft: 0,
           maxTime: 0,
           dasharrayTick: undefined,
       };

  timeCalculate = () => {;
    if(this.state.timeLeft > 0){
    (this.state.timeLeft / 60 > 9.99) ? this.state.minutes = parseInt(this.state.timeLeft / 60) : this.state.minutes = '0' + parseInt(this.state.timeLeft / 60);
    (this.state.timeLeft % 60 > 9) ? this.state.seconds = parseInt(this.state.timeLeft % 60) : this.state.seconds = '0' + parseInt(this.state.timeLeft % 60);
    }
    else{
      this.state.seconds = '00';
      this.state.minutes = '00';
      this.state.timeleft = 0;
      this.state.timeleft = 0;
    }
    this.setState({
      seconds: this.state.seconds,
      minutes: this.state.minutes,
    })
  };

  run = () => {
    if (this.classes.button.addButton == "add-button-open"){
      setTimeout(function(){
        this. interval = setInterval(function (){
          this.state.timeLeft--;
          this.timeCalculate();
          this.dashCalculate();
          (this.state.timeLeft == 0) ? this.stop() : void 0;
        }.bind(this), 1000)
      }.bind(this), 1000)
    }
    else {
    this. interval = setInterval(function (){
      this.state.timeLeft--;
      this.timeCalculate();
      this.dashCalculate();
      (this.state.timeLeft == 0) ? this.stop() : void 0;
    }.bind(this), 1000)
  }
  }

  stop = () => {
    clearInterval(this.interval);
  }

  timer =  () => {
    this.state.isRun = !this.state.isRun;
    (this.state.isRun === true && this.state.timeLeft > 0) ? this.run() : this.stop();
    if(this.state.isInput) {
      this.classes.timerList.overflow = "overflow-close";
      if(this.classes.button.addButton == "add-button-open"){
      setTimeout(function(){
        this.classes.button.addButton = "add-button-hide";
        setTimeout(function(){
          this.classes.input.class = "timer clock circle-transition";
          this.classes.circle.class = "circle-transition";
          this.classes.button.classSet = "btn btn-style set-time"
          this.classes.timerCirckle = "timerCirckle";
          this.setState({
            timerCirckle: this.classes.timerCirckle,
          })
        }.bind(this), 300)

        this.setState({
          class: this.classes.input.class,
          class: this.classes.circle.class,
          classSet: this.classes.button.classSet,
          clockContainer: this.classes.clock.clockContainer,
        })
      }.bind(this), 700);
      this.state.isInput = false;
    }
    else{
      this.classes.button.addButton = "add-button-hide";
      setTimeout(function(){
          this.classes.input.class = "timer clock circle-transition";
          this.classes.circle.class = "circle-transition";
          this.classes.button.classSet = "btn btn-style set-time"
          this.classes.timerCirckle = "timerCirckle";

        this.setState({
          class: this.classes.input.class,
          class: this.classes.circle.class,
          classSet: this.classes.button.classSet,
          clockContainer: this.classes.clock.clockContainer,
          timerCirckle: this.classes.timerCirckle,
        })
      }.bind(this), 300);
      this.state.isInput = false;
    }
  }
  }
  dashCalculate = () => {
    this.state.dasharrayTick = this.circle.strokeDasharray[1] / this.state.maxTime;
    this.circle.strokeDashoffset[0] += this.state.dasharrayTick;

    this.setState({
      strokeDashoffset: this.circle.strokeDashoffset,
    })
  }

  toggleClass = () => {
    (this.classes.button.classStartStop === "btn btn-style run") ? this.classes.button.classStartStop = "btn btn-style stop" : this.classes.button.classStartStop = "btn btn-style run";
    this.setState({
      class: this.classes.button.classStartStop,
    });
  }

  resetTime = () => {
    this.state.timeLeft = this.state.maxTime;
    this.state.isRun = false;
    this.stop();
    this.circle.strokeDashoffset[0] = 126;
    (this.classes.button.classStartStop = "btn btn-style stop") ? this.toggleClass() : this.state.isRun = false;
    this.timeCalculate();
  }

  setTime = () => {
    if(!this.state.isInput){
      this.state.maxTime = 0;
      this.state.timeLeft = 0;
      this.resetTime();
    }

    this.state.isInput = !this.state.isInput;
    this.state.isRun = false;
    this.classes.button.class = "btn btn-style run";
    this.stop();

    if (this.state.isInput) {
      setTimeout( function() {
        this.classes.circle.class = "circle-transition hide";
        this.classes.input.class = "timer clock circle-transition time-input inner-shadow";
        this.classes.timerCirckle = "timerCirckle scale";
        this.setState({
          clockContainer: this.classes.clock.clockContainer,
          class: this.classes.input.class
        })
      }.bind(this), 300);
      setTimeout( function() {
        this.classes.button.addButton = "add-button-close";
        this.setState({
          addButton: this.classes.button.addButton,
          clockContainer: this.classes.clock.clockContainer,
        })
      }.bind(this), 300);
      this.classes.button.classSet = "btn btn-style set-time set-time-press";
      this.circle.strokeDashoffset[0] = 126;
    }
    else{
      if(this.classes.button.addButton == "add-button-close"){
      this.classes.button.addButton = "add-button-hide"
      setTimeout( function() {
        this.classes.timerCirckle = "timerCirckle";
        this.classes.circle.class = "circle-transition";
        this.classes.input.class = "timer clock circle-transition";
        this.classes.button.classSet = "btn btn-style set-time";
        this.circle.strokeDashoffset[0] = 126;
        this.setState({
          clockContainer: this.classes.clock.clockContainer,
          strokeDashoffset: this.circle.strokeDashoffset
        })
      }.bind(this), 300);

        this.setState({
          addButton:this.classes.button.addButton,
        })

    }
      else {
        this.classes.timerList.overflow = "overflow-close";
        setTimeout (function () {
          this.classes.button.addButton = "add-button-hide";
          setTimeout( function() {
              this.classes.timerCirckle = "timerCirckle";
              this.classes.circle.class = "circle-transition";
              this.classes.input.class = "timer clock circle-transition";
              this.classes.button.classSet = "btn btn-style set-time";
              this.circle.strokeDashoffset[0] = 126;
              this.setState({
                clockContainer: this.classes.clock.clockContainer,
                strokeDashoffset: this.circle.strokeDashoffset,
                maxTime: this.state.maxTime,
                timeLeft: this.state.timeLeft,
                strokeDashoffset: this.circle.strokeDashoffset,
              });
      }.bind(this),300);

      this.setState({
        addButton: this.classes.button.addButton,
      });
    }.bind(this), 600);
    this.setState({
      overflow: this.classes.timerList.overflow,
    });
    }
    }
  }

  inputTimeSec = (e) => {

    if(this.classes.timerCirckle == "timerCirckle scale") {

      if (this.state.timeLeft <= 0) {
        this.state.maxTime = 0;
        this.state.timeLeft = 0;
        this.timeCalculate();
      }

      if (e.deltaY < 0) {
        this.state.maxTime++;
        this.state.timeLeft++;
        this.timeCalculate();
      }

      else {
        this.state.maxTime--;
        this.state.timeLeft--;
        this.timeCalculate();
        }
      }
      else {
        void 0
      }
    }

  inputTimeMin = (e) => {

    if(this.classes.timerCirckle == "timerCirckle scale") {

      if (this.state.timeLeft <= 0 ) {
        this.state.maxTime = 0;
        this.state.timeLeft = 0;
        this.timeCalculate();
      }

      if (e.deltaY < 0) {
        this.state.maxTime += 60;
        this.state.timeLeft += 60;
        this.timeCalculate();
      }

      else {
        this.state.maxTime -= 60;
        this.state.timeLeft -= 60;
        this.timeCalculate();
        }
      }
      else {
        void 0;
      }
      }

  save = (e) => {
    var state = true;
    if (e.keyCode === 13) {
      if (document.getElementById('input').value){
        if (this.state.maxTime !== 0){
          timerList.push(
            {
              title: document.getElementById('input').value,
              minutes: this.state.minutes,
              seconds: this.state.seconds,
              timeLeft: this.state.timeLeft,
              maxTime: this.state.maxTime,
            }
          )
          localStorage.setItem('TimerList', JSON.stringify(timerList))
          document.getElementById('input').value = ""
          this.setState({
            true: false
          })
        }
      }
    }
  }

  edit = (e) => {
    if (this.state.maxTime !== 0){
      if (document.getElementById('input').value){
        timerList[e.target.id] = {
            title: document.getElementById('input').value,
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            timeLeft: this.state.timeLeft,
            maxTime: this.state.maxTime,
          }
      }
      else{
        timerList[e.target.id] = {
            title: timerList[e.target.id].title,
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            timeLeft: this.state.timeLeft,
            maxTime: this.state.maxTime,
          }
      }
        localStorage.setItem('TimerList', JSON.stringify(timerList))
        document.getElementById('input').value = ""
        this.setState({
          true: false
        })
      }
    }

  openTimerList = () => {
    if (this.classes.button.addButton === "add-button-close"){
    this.classes.button.addButton = "add-button-open";
    this.classes.timerList.overflow = "overflow-open";
    }
    else{
    this.classes.button.addButton = "add-button-close";
    this.classes.timerList.overflow = "overflow-close";
    }

    this.setState({
      overflow: this.classes.timerList.overflow,

    })
  }

  choseTime = (e) => {
    let target = e.target;
    this.state.maxTime = timerList[target.id].maxTime;
    this.state.timeLeft = timerList[target.id].timeLeft;
    this.timeCalculate();
  }

  render() {
    return (
      <div className = {"container"}>

          <Circle circle = {this.circle}
          classes = {this.classes} />

          <div className = {this.classes.timerCirckle}>

            <Clock  minutes = {this.state.minutes}
            seconds = {this.state.seconds}
            classes = {this.classes}
            inputTimeSec = {this.inputTimeSec}
            inputTimeMin = {this.inputTimeMin} />

            <TimerList classes = {this.classes}
            timerList = {timerList}
            save = {this.save}
            choseTime = {this.choseTime}
            edit = {this.edit} />

            <AddTimerButton classes = {this.classes}
            timerCirckle = {this.openTimerList}
             />

          </div>

          <div className = "button-holder">
            <StartStopButton timer = {this.timer}
            toggleClass = {this.toggleClass}
            classes = {this.classes}/>

            <ResetTimeButton resetTime = {this.resetTime} />

            <SetTimeButton setTime = {this.setTime}
            classes = {this.classes}/>
          </div>
      </div>
    );
  }
}
