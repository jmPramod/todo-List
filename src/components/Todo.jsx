import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
const Todo = ({ list, setList, setEdittodo }) => {
  const handleDelete = ({ id }) => {
    setList(list.filter((v) => v.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findList = list.find((v) => v.id === id);

    setEdittodo(findList);
  };

  let handleComplete = (e) => {
    setList(
      list.map((v, i) => {
        if (v.id === e.id) {
          return { ...v, completed: !v.completed };
        }
        return v;
      })
    );
  };
console.log("list",list);
  return (
    <div className="allList">
  {list.length<=0 && <h1 style={{textAlign:"center", color:"red"}}>nothing to display!! please add the title</h1>}
  
  
     {list.map((v, i) => (
        <>
          <li
            key={v.id}
            onDoubleClick={() => handleEdit(v)}
            id= "checkedtrue"
          
          >
            <label class="container">
              <input
                
                type="checkbox"
                name=""
                className="check"
                checked={v.completed}
                id=""
                onClick={() => handleComplete(v)}
              />
              <span class="checkmark"></span>
            </label>
            <input
              
              type="text"
              value={v.title}
              disabled
              style={{margin: "3px",
                textDecoration: v.completed  ? 'line-through' : 'none'
              }}
           
            />

            <div>
              <button onClick={() => handleDelete(v)} style={{width:"40px",height:"40px"}}> 
                <FaRegTrashAlt />
              </button>
            </div>
          </li>
        </>
      ))}
    </div>
  );
};

export default Todo;
