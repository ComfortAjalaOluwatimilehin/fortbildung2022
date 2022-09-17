import { observable } from "mobx";
export const task = {
  id: 1,
  title: "Test Task",
  state: "TASK_INBOX",
};

const tasks = [
  { ...task, id: "1", title: "Task 1" },
  { ...task, id: "2", title: "Task 2" },
  { ...task, id: "3", title: "Task 3" },
  { ...task, id: "4", title: "Task 4" },
  { ...task, id: "5", title: "Task 5" },
  { ...task, id: "6", title: "Task 6" },
];

export const storeGenerator  = () => {

  return observable({
    tasks,
    status: "idle",
    error: null,
    sortedTasks:[
      ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
    ],
    pinnedTasks: [
      ...tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
    toggleLoading: (target) => {
      target.status = "loading";
    },
    emptyTasks: (target) => {
      target.tasks = [];
    },
    resetTasks: (target) => {
      target.tasks = [...tasks];
    },
    onArchiveTask:(target, targetTaskId)=> {
      target.tasks.forEach((task) => {
        if(task.id === targetTaskId){
          task.state = "TASK_ARCHIVED"
          console.log(task)
        }
         
      })
          
    },
    onPinTask:(target, targetTaskId)=> {
      target.tasks.forEach((task) => {
        
        if(task.id === targetTaskId){
        
          task.state = "TASK_PINNED"
          console.log(task)
        }
          
      })
          
    }
  });
  
}
