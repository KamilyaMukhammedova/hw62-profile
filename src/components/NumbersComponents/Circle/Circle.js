import {Component} from "react";
import './Circle.css';

class Circle extends Component {
  render() {
    return (
      <div className="circle">
       <span>{this.props.number}</span>
      </div>
    );
  }
}

export default Circle;