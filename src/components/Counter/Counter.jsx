import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count,setCount]=React.useState(1);
  const handleInc=()=>{
    
    setCount(count+1);
  }
  const handleDec=()=>{
    if(count==0){
      setCount(0);
    }
    else{
      setCount(count-1);
    }
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleInc}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleDec}>-</button>
    </div>
  );
};

export default Counter;
