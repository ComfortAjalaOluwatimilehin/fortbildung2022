import React from "react";
import Task from "./Task";
import { inject} from "mobx-react"
 const TaskList = (store) => {
  const events = {
    onArchiveTask:(id) => store.onArchiveTask(store, id),
    onPinTask:(id) => store.onArchiveTask(store, id),
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (store.status === "loading") {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (store.tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }
 
  return (
    <div className="list-items">
      {store.sortedTasks.map((task) => {
        return <Task key={task.id} task={task} {...events} />;
      })}
    </div>
  );
};

const StoreTaskList = inject((stores) => ({
  ...stores.store
}))(TaskList)

export {StoreTaskList}