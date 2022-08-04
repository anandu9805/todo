import {atom} from "recoil";
import {ITask} from "./interfaces";

const  todoAtom = atom({
  key: "todo",
  default: [] as ITask[],
});
export  default todoAtom;