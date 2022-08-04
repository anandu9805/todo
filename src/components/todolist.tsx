
import {ITask} from "../interfaces";


import TaskCard from "./Taskcard";

function Todolist(params: { list:ITask[]; }) {

   

    const deletefromList=(id:number)=>{
        
        let filteredlist = params.list.filter((item) => {
            return item.id !== id;
          });  
          return filteredlist;
    }


  return (
    <div>
      {params.list.map((item) => {
        
          return <TaskCard key={item?.id} id={item?.id} task={item.task} delete={deletefromList}></TaskCard>;
        })} 
    </div>
  );
}

export default Todolist;
