import { ActionType, IAction, IGlobalState, ITodo } from ".";

export function todoReducer(state: IGlobalState, action: IAction) {
  switch (action.type) {
    case ActionType.ADD_TYPE:
      return {
        ...state,
        todoList: [...state.todoList, action.payload as ITodo],
      };
    case ActionType.REMOVE_TYPE:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => !todo.completed),
      };
    case ActionType.TOGGLE_TYPE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === (action.payload as number)
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ActionType.COMPLETED_TYPE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          !todo.completed ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}
