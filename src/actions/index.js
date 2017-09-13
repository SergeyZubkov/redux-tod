export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    ...task
  }
}

export const toggleDone = (id) => {
  return {
    type: 'TOGGLE_DONE',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
