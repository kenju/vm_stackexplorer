import React, { Component } from 'react';
import frames from './frames.json';
import './Frame.css';

class Frame extends Component {
  // TODO: seperate to an another component
  renderStacks(stacks) {
    return Array.from(stacks).map((stack, index) => {
      return (
        <div className="Stack-row">
          <div className="Stack-num">
            {stacks.length - index}
          </div>
          <ul className="Stack-list">
            <li className="Stack-listItem">c: {stack.count}</li>
            <li className="Stack-listItem">pc: {stack.pc}</li>
            <li className="Stack-listItem">sp: {stack.sp}</li>
            <li className="Stack-listItem">ep: {stack.ep}</li>
            <li className="Stack-listItem">{stack.type}</li>
            <li className="Stack-listItem">{stack.insns}</li>
          </ul>
        </div>
      );
    });
  }

  renderFrames() {
    return Array.from(frames).map((frame) => {
      return (
        <div className="Frame-content">
          <h3>{frame.type}</h3>
          {this.renderStacks(frame.stacks)}
        </div>
      );
    });
  }

  renderHeader() {
    console.log(frames);
    return (
      <div className="Frame-Header">
        <h2>Stack Frames</h2>
        <ul className="Frame-Header-list">
          <li className="Frame-Header-listItem">Total Frames: {frames.length}</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="Frame">
        {this.renderHeader()}
        {this.renderFrames()}
      </div>
    );
  }
}

export default Frame;
