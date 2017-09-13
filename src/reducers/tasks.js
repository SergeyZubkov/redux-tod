const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: action.done
        }
      ]
    case 'TOGGLE_DONE':
      return state.map(task =>
        (task.id === action.id)
        ? {...task, done: !task.done}
        : task
      )
    default:
      return state;
  }
}

export default tasks;
