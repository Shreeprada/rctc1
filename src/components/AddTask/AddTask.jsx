import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({data,setData}) => {
  const [value,setValue]=React.useState("");
  // const[data,setData]=React.useState([{
  //   "id": 1,
  //   "text": "Push up",
  //   "done": true,
  //   "count": 2
  // },
  // {
  //   "id": 2,
  //   "text": "Pull Up",
  //   "done": true,
  //   "count": 3
  // },
  // {
  //   "id": 3,
  //   "text": "Squats",
  //   "done": false,
  //   "count": 1
  // },
  // {
  //   "id": 4,
  //   "text": "Sprint",
  //   "done": false,
  //   "count": 5
  // },
  // {
  //   "id": 5,
  //   "text": "Stairs",
  //   "done": false,
  //   "count": 200
  // }]);
let handleChange=(e)=>{
  setValue(e.target.value);
}
 let  addtaskfn=()=>{
console.log(value);
 setData(...data,{id:Date.now(),text:value,done:false,count:1});
console.log(data);
setValue("");
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task.." value={value} className={styles.input} onChange={handleChange}/>
      <button data-cy="add-task-button" className={styles.btn} onClick={addtaskfn}>+</button>
    </div>
  );
};

export default AddTask;
