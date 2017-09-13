import React, { Component } from 'react';
import './TodoApp.css';
import TaskForm from './containers/TaskForm';
import TaskList from './containers/TaskList';
import TaskFilter from './TaskFilter';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks:[],
      filter: 'ALL'
    }
  }

  createTask = (task) => {
    this.setState(
      {tasks: [task, ...this.state.tasks]}
    ,() =>   console.log(this.state.tasks));
  }

  handleChangeDone = (id) => {
    console.log(id)
    let task = this.state.tasks.find(task => task.id === id);
    task.done = !task.done;

    this.setState({
      tasks: [...this.state.tasks]
    })
  }

  changeFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    return (
      <div className="todo-app">
        <TaskForm
          onSubmit={this.createTask}
        />
        <TaskList
          filter={this.state.filter}
          tasks={this.state.tasks}
          onChangeDone={this.handleChangeDone}
        />
        <TaskFilter onChangeFilter={this.changeFilter} />
      </div>
    );
  }
}

export default TodoApp;
