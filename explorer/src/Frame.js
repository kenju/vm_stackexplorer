import React, { Component } from 'react';
import frames from './frames.json';
import './Frame.css';

class Frame extends Component {
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
      console.log(frame);
      return (
        <div className="Frame-content">
          <h2>{frame.type}</h2>
          {this.renderStacks(frame.stacks)}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="Frame">
        {this.renderFrames()}
      </div>
    );
  }
}

export default Frame;
