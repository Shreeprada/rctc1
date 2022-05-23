import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";


const Tasks = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    {data.map((item)=>(

   
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        
        <Task item={item}/>
      </ul>
       ))}
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        
      </div>
    </>
  );
};

export default Tasks;
