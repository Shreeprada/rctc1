import React from "react";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";

const TaskApp = () => {
  const[data,setData]=React.useState([{
    "id": 1,
    "text": "Push up",
    "done": true,
    "count": 2
  },
  {
    "id": 2,
    "text": "Pull Up",
    "done": true,
    "count": 3
  },
  {
    "id": 3,
    "text": "Squats",
    "done": false,
    "count": 1
  },
  {
    "id": 4,
    "text": "Sprint",
    "done": false,
    "count": 5
  },
  {
    "id": 5,
    "text": "Stairs",
    "done": false,
    "count": 200
  }]);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>

      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask data={data}/>
      {/* Tasks */}
      <Tasks data={data}/>
    </div>
  );
};

export default TaskApp;
