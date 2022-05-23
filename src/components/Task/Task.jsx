import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({item,data,setData}) => {
  const remove=(id)=>{
    let newdata=data.filter(()=>item.id!=id);
    setData(newdata);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{item.text}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>{remove(item.id)}}>-</button>
    </li>
  );
};

export default Task;
