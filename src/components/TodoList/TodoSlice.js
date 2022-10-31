const initState = [
  { id: 1, name: 'abc', priority: 'Medium', completed: true },
  { id: 2, name: 'abc1', priority: 'High', completed: false },
  { id: 3, name: 'abc2', priority: 'Low', completed: false },
]

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload]
    case 'todoList/toggleTodoStatus':
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
    default:
      return state
  }
}

export default todoReducer
