// 指定todo项的值类型
export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// 全局状态
export interface IGlobalState {
  todoList: ITodo[];
}

// dispatch 携带的action类型
export interface IAction {
  type: ActionType;
  payload?: number | ITodo;
}

// action type类型枚举
export enum ActionType {
  ADD_TYPE = "add",
  REMOVE_TYPE = "remove",
  TOGGLE_TYPE = "toggle",
  COMPLETED_TYPE = "active",
}
