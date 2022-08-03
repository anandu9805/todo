import "./components/todolist";
import todoAtom from "./Atom";
import { useRecoilState } from "recoil";
import Todolist from "./components/todolist";
import "./styles/App.css";
import React, { ChangeEvent } from "react";
import { Input, IconButton } from "@material-tailwind/react";

import background from "./Assets/frontpage.png";

let work: string;

function App() {
  const [todolist, updateList] = useRecoilState(todoAtom);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    work = event.target.value;
  };

  return (
    <div
      className="bg-auto bg-no-repeat "
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
        backgroundPosition: "right center",
      }}
    >
      <div>
        <h1 className="flex text-amber-400  text-4xl mt-4 mb-1.5 ml-12 justify-start font-title">
          Todo List
        </h1>
        <div className=" flex " style={{ columnGap: "200px" }}>
          <div
            className="ml-11 px-5 py-5 border-y border-x bg-gray-50  border-gray-600  rounded-3xl "
            style={{ width: "520px", height: "600px" }}
          >
            <div>
              <Todolist list={todolist}></Todolist>
            </div>
          </div>
          <div className=" flex flex-wrap">
            <div className="mr-20 mb-12">
              <Input
                style={{ width: "550px" }}
                variant="outlined"
                size="lg"
                label="Enter task"
                onChange={handleChange}
              />
            </div>
            <div >
              <button
                className="border-black"
                 style={{width:"100px",color:"red"}}
                onClick={() => {
                  updateList(() => {
                    return todolist.concat({
                      id: todolist.length + 1,

                      task: work,
                    });
                  });
                }}
              >
                {" "}
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
