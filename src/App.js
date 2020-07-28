import React, { Component } from 'react';
import './App.css';
import Shape from './Shape';

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'have not clicked on a shape',
      isClicked: 'false',
    };
  }

  selectShape = (shape) => {
    console.log('this is the event object', shape);
    this.setState({
      selectedShape: shape,
      isClicked: this.state.isClicked,
    });
  };

  handleClick = () => {
    this.setState({
      isClicked: 'true',
    });
  };

  render() {
    const { selectedShape, isClicked } = this.state;
    return (
      <div className="container">
        <div className="navbar">
          <div>
            Selected: <span>{selectedShape}</span>
          </div>
          <div onClick={this.handleClick}>{isClicked}</div>
        </div>
        <div className="shape-list">
          <Shape shape="square" selectShape={this.selectShape} />
          <Shape shape="circle" selectShape={this.selectShape} />
          <Shape shape="triangle" selectShape={this.selectShape} />
        </div>
      </div>
    );
  }
}
export default Selector;