import React from 'react';

 export default class Circle extends React.Component{

   render(){
    return(
      <div className = "circle circle-transition">
        <svg>
          <circle className = {this.props.classes.circle.class}
          cx={this.props.circle.cx}
          cy={this.props.circle.cy}
          r={this.props.circle.r}
          fill={this.props.circle.fill}
          stroke={"#141414"}
          strokeWidth={2.2}
          opacity={1}
          ></circle>

          <circle className = {this.props.classes.circle.class}
          cx={this.props.circle.cx}
          cy={this.props.circle.cy}
          r={this.props.circle.r}
          fill={this.props.circle.fill}
          stroke={this.props.circle.stroke}
          strokeWidth={this.props.circle.strokeWidth}
          strokeDashoffset={this.props.circle.strokeDashoffset[0]}
          strokeDasharray={this.props.circle.strokeDasharray}
          ></circle>
        </svg>
      </div>
    )
  }
}
