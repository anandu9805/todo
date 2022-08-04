export  interface ITask{
    id:number;
    task:string;
}
export  interface IParamTaskcard{
    id:number;
    task:string;
   
    delete:(id:number)=>ITask[]
}