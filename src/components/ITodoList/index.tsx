import ICheckbox from "../ICheckbox";
import "./style.css";
import { ITodo } from "../../typings";

interface IProps {
  todoList: ITodo[];
  removeTodo: () => void;
  toggleTodo: (id: number) => void;
  activeTodo: () => void;
}

function ITodoList(props: IProps) {
  const { todoList, removeTodo, toggleTodo, activeTodo } = props;
  /*const todoList_data = [
    { id: 1, content: "Jog around the park", completed: true },
    { id: 2, content: "10 Jog around the park 3X", completed: false },
  ];*/
  const activeCount = todoList.filter((item) => !item.completed).length;
  return (
    <div
      className="list"
      style={{ display: `${!!todoList.length ? "flex" : "none"}` }}
    >
      <div className="bscroll list_scroll ">
        {todoList.map((item) => (
          <div key={item.id} className="item">
            <ICheckbox todoItem={item} toggleTodo={toggleTodo}></ICheckbox>
          </div>
        ))}
      </div>
      <div className="footer">
        <span>{activeCount} items left</span>
        <span onClick={() => activeTodo()}>All Active Completed</span>
        <span onClick={() => removeTodo()}>Clear Completed</span>
      </div>
    </div>
  );
}

export default ITodoList;
