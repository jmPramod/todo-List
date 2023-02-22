import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Add from "./components/Add";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const intialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [title, setTitle] = useState("");
  const [list, setList] = useState(intialState);
  const [edittodo, setEdittodo] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <NavBar />
      <div className="midsection" >
      <div className="bothItem" >
        <div className="addItem">
      <Add
        title={title}
        setTitle={setTitle}
        list={list}
        setList={setList}
        edittodo={edittodo}
        setEdittodo={setEdittodo}
      />
      </div>
      <div className="fullList">
      <Todo
        list={list}
        setList={setList}
        edittodo={edittodo}
        setEdittodo={setEdittodo}
      />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
