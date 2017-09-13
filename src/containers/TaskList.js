import React, {Component} from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem';
import {connect} from 'react-redux';
import {toggleDone} from '../actions';


class TaskList extends Component {

  render() {
    const filter = this.props.filter;
    const tasks = this.props.tasks
    .filter(task => {
      if (filter === 'ALL') {
        return true;
      }
      else if (filter === 'DONE') {
        return task.done;
      }
      else if (filter === 'ACTIVE') {
        return task.done === false;
      }
    })
    console.log(filter)
    return (
      <ul>
        {tasks.map(
          (task, i) => <TaskItem
            key={i}
            onClick={() => this.props.onTaskClick(task.id)}
             {...task}
          />)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter:state.filter
})

const mapDispatchToProps = {
  onTaskClick: toggleDone
}


TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskList;
