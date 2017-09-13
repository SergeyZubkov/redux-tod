import React, {Component} from 'react';
import './TaskFilter.css';

class TaskFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'ALL'
    }
  }

  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    }, () => this.props.onChangeFilter(this.state.filter));

  }

  render() {
    return (
      <div>
        <hr />
        <label>
          <input
            type='radio'
            name='filter'
            value="ALL"
            onChange={this.handleChange}
            checked={this.state.filter === 'ALL'}
          /> Все
        </label>
        <label>
          <input
            type='radio'
            name='filter'
            value="DONE"
            onChange={this.handleChange}
            checked={this.state.filter === 'DONE'}
          />
           Выполненые
     </label>
       <label>
          <input
            type='radio'
            name='filter'
            value="ACTIVE"
            onChange={this.handleChange}
            checked={this.state.filter === 'ACTIVE'}
          />
           Активные
        </label>
      </div>
    )
  }
}

export default TaskFilter;
