import "./App.css";
import "./style/home.css";
import ITodo from "./components/IITodo";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="gradient_to_right"></div>
        <div className="gradient_to_left"></div>
      </div>
      <div className="content">
        <div className="title">TODO</div>
        <ITodo />
      </div>
    </div>
  );
}

export default App;
