import React from "react";
import { useRecoilState } from "recoil";

import todoAtom from "../Atom";
import { IParamTaskcard } from "../interfaces";
import { IconButton } from "@material-tailwind/react";

function TaskCard(params:IParamTaskcard) {
    const [todolist, deleteFromList] = useRecoilState(todoAtom);




  return (
    <div className="card transition ease-in-out delay-300  hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-500">
        <div className="flex flex-col gap-y-2.5">
              <p>Task:{params.task}</p>
              <div className="flex  justify-between">
              <IconButton 
               variant="outlined"
               size="lg" 
              onClick={() => {}}>
                complete
              </IconButton>
              <IconButton
               variant="outlined"
               size="sm"
               
                onClick={() => {

                  deleteFromList(params.delete(params.id));
                
                  
                
                }}
              >
                delete
              </IconButton>
              </div>
          
        </div>
        <br></br>
    </div>
  );
}

export default TaskCard;
