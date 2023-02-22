import React, { useEffect } from "react";
import { v4 as ID } from "uuid";

const Add = ({ title, setTitle, list, setList, edittodo, setEdittodo }) => {
  const updatedList = (title, id, completed) => {
    const newUpdate = list.map((v) =>
      v.id === id ? { title, id, completed } : v
    );
    setList(newUpdate);
    setEdittodo("");
  };

  let handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("edittodo",edittodo);
    if (!edittodo) {
      console.log("if");
      setList([...list, { id: ID(), title: title, completed: false }]);
      setTitle("");
    } else {
      console.log("else");
      updatedList(title, edittodo.id, edittodo.completed);
    }
  };

  useEffect(() => {
    // console.log("xxx",edittodo?.title,list)'

    if (edittodo) {
      setTitle(edittodo.title);
    } else {
      setTitle("");
    }
  }, [setTitle, edittodo]);





  const handleClear=()=>{
    for( var i = 0; i < list.length; i++){ 
    
     
      var filtered = list.filter(function(value, index, arr){ 
        return value.completed ===false;
    });
  
    setList(filtered)
  }
}
  return (
    <div className="first">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter text hear..."
          name=""
          id=""
          value={title}
          required
          onChange={handleChange}
        />
        <button type="submit">{edittodo ? "update" : "add"}</button>
        
        {list.length>0?<button type="button" onClick={handleClear} className="remove">Remove Checked</button>:null}
      </form>
    </div>
  );
};

export default Add;
