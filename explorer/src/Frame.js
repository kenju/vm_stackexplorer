import React, { Component } from 'react';
import frames from './frames.json';
import './Frame.css';

class Frame extends Component {
  renderStacks(stacks) {
    return Array.from(stacks).map((stack) => {
      return (
        <ul className="Stack-list">
          <li className="Stack-listItem">{stack.count}</li>
          <li className="Stack-listItem">{stack.pc}</li>
          <li className="Stack-listItem">{stack.sp}</li>
          <li className="Stack-listItem">{stack.ep}</li>
          <li className="Stack-listItem">{stack.type}</li>
          <li className="Stack-listItem">{stack.insns}</li>
        </ul>
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
