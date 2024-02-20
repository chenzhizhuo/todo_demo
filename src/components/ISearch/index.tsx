import { useRef } from "react";
import "./style.css";
import { ITodo } from "../../typings";

interface Iprops {
  addTodo: (todo: ITodo) => void;
}

function ISearch(props: Iprops) {
  const { addTodo } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddItem = (event: any) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value.trim();
      if (value) {
        addTodo({
          id: new Date().getTime(),
          content: value,
          completed: false,
        });

        inputRef.current && (inputRef.current.value = "");
      }
    }
  };
  return (
    <div className="search">
      <input
        ref={inputRef}
        onKeyUp={handleAddItem}
        type="text"
        placeholder="请输入内容并回车添加事项..."
      ></input>
    </div>
  );
}

export default ISearch;
