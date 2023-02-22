import React from "react";

import { FaRegTrashAlt } from 'react-icons/fa';
const Todo = ({ list, setList, setEdittodo }) => {
  //todo=list settodo=selist
  const handleDelete = ({ id }) => {
    setList(list.filter((v) => v.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findList = list.find((v) => v.id === id);
    // console.log("findList",findList);
    setEdittodo(findList);
  };

//   let handleComplete = (e) => {
    
//     setList(
//       list.map((v, i) => {
        
//         if (v.id === e.id) {
//           return { ...v, completed: !v.completed };
//         }
//         return v;
//       })
//     );
//   };
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

  return (
    <div className="allList">
      {list.map((v, i) => (
        <>
          <li key={v.id} onDoubleClick={() => handleEdit(v)}
           className={v.checked?"checkedtrue":"checkedfalse"}
          style={{marginBottom:"4px"}}
          >
          <input
          style={{marginRight:"13px"}}
                type="checkbox"
                name=""
                id=""
                onClick={() => handleComplete(v)}
              />
             
            <input
 style={{margin:"3px"}}
              type="text"
              value={v.title}
              disabled
              onChange={(e) => e.preventDefault()}
             
            />

            <div>
              <button onClick={() => handleDelete(v)}><FaRegTrashAlt/></button>
              {/* <button onClick={()=>handleEdit(v)}>edit</button> */}
              {/* <button onClick={()=>handleComplete(v)}>completed</button> */}
            </div>
          </li>
        </>
      ))}
    </div>
  );
};

export default Todo;
