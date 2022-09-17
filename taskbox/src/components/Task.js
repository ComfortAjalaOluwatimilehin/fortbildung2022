import React from "react";
import Prototype from "prop-types"
export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type={"checkbox"}
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <label htmlFor="title" aria-label={title}>
        <input
          type={"text"}
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}


Task.prototype = {
    task:Prototype.shape({
        id:Prototype.string.isRequired,
        title:Prototype.string.isRequired,
        state:Prototype.string.isRequired,

    })
    ,
    onArchiveTask:Prototype.func,
    onPinTask:Prototype.func
}