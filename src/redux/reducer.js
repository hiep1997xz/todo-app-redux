import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoReducer from "../components/TodoList/TodoSlice"

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoReducer
})

export default rootReducer
