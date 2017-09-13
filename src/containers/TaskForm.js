import React, {Component} from 'react';
import './TaskForm.css';
import cuid from 'cuid';
import {addTask} from '../actions';
import {connect} from 'react-redux';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = Object.assign(
      this.state,
      {
        done: false,
        id: cuid()
      }
    );
    this.props.dispatch(addTask(newTask));
    console.log(newTask)
    this.clearForm();
  }

  clearForm() {
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          value={this.state.task}
          placeholder='задача'
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

TaskForm = connect()(TaskForm);

export default TaskForm;
