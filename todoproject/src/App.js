
import Form from "./Components/Form";
import Header from "./Components/Header";
import RenderList from "./Components/RenderList";
import "./main.css"
import {useState} from 'react';
function App() {
  const [itemTodo,setItemTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  const [error,setError] = useState(false);
  const [duplicate,setDuplicate] = useState(false);
  return (
    <div className="App">
      <Header></Header>
      <Form
        itemTodo={itemTodo}
        setItemTodo={setItemTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        error={error}
        setError={setError}
        duplicate={duplicate}
        setDuplicate={setDuplicate}
      ></Form>
      <RenderList
        todoList={todoList}
        setTodoList={setTodoList}
      ></RenderList>
    </div>
  );
}

export default App;
