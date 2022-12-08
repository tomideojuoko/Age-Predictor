export const Task = (props) => {
    return (
     <div className="task">
       <h1>{props.taskName}</h1>
       <button> Complete </button>
       <button onClick={() => props.deleteTask(props.id)}> x </button>
     </div> 
  );
 }; 