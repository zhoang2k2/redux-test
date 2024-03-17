import { Action } from "./action"

const initialState = {
  todoItem: [{ id: "", content: "" }],
}

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Action.ADD:
      return {
        ...state,
        todoItem: [...state.todoItem, action.data],
      }
    case Action.DELETE:
      return {
        ...state,
        todoItem: state.todoItem.filter(item => item.id !== action.id),
      }
    default:
      return state
  }
}
