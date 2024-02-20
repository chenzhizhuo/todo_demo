import { ITodo } from "../../typings";
import "./style.css";

interface IProps {
  todoItem: ITodo;
  toggleTodo: (id: number) => void;
}

function ICheckbox(props: IProps) {
  const { todoItem, toggleTodo } = props;

  return (
    <>
      <span
        className={`checkbox ${todoItem.completed ? "checked" : ""}`}
        onClick={() => toggleTodo(todoItem.id)}
      ></span>
      <span
        className={`item_title ${todoItem.completed ? "close" : ""}`}
        title={todoItem.content.length >= 20 ? todoItem.content : ""}
      >
        {todoItem.content}
      </span>
    </>
  );
}

export default ICheckbox;
