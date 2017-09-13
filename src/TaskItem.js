import React, {Component} from 'react';
import './TaskItem.css';

class TaskItem extends Component {

  render() {
    return (
      <li
                  onClick={() => this.props.onClick()}
      >
        <input
          type='checkbox'
          checked={this.props.done}
        />
        {this.props.text}
      </li>
    )
  }
}

export default TaskItem;
