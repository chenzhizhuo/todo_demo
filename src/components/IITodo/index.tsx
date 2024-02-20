import { useReducer } from "react";
import ITodoList from "../ITodoList";
import { ActionType, ITodo } from "../../typings";
import ISearch from "../ISearch";
import { todoReducer } from "../../typings/todoReducer";

function IITodo() {
  const todoInit = (initTodoList: ITodo[]) => {
    return {
      todoList: initTodoList,
    };
  };

  const [todoState, todoDispatch] = useReducer(
    todoReducer,
    [
      /*{ id: 1, content: "Jog around the park", completed: true },
      { id: 2, content: "10 Jog around the park 3X", completed: false },*/
    ],
    todoInit
  );

  const handleAddTodo = (todo: ITodo): void => {
    console.log("add:", todo);
    todoDispatch({
      type: ActionType.ADD_TYPE,
      payload: todo,
    });
  };

  const handleRemoveTodo = (): void => {
    todoDispatch({
      type: ActionType.REMOVE_TYPE,
    });
  };

  const handleToggleTodo = (id: number): void => {
    todoDispatch({
      type: ActionType.TOGGLE_TYPE,
      payload: id,
    });
  };

  const handleCompletedTodo = (): void => {
    todoDispatch({
      type: ActionType.COMPLETED_TYPE,
    });
  };
  return (
    <>
      <ISearch addTodo={handleAddTodo}></ISearch>
      <ITodoList
        todoList={todoState.todoList}
        removeTodo={handleRemoveTodo}
        toggleTodo={handleToggleTodo}
        activeTodo={handleCompletedTodo}
      ></ITodoList>
    </>
  );
}

export default IITodo;
