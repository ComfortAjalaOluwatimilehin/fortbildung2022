import { Component, h, Prop } from '@stencil/core';
import { ITask } from './tasks';

@Component({ tag: 'task-component' })
export class TaskComponent {
  @Prop() task: ITask;
  @Prop() updateTask:(updatedTask:ITask) => any; 

  render() {
    return (
      <div class="task">
        {this.task ? (
          <duet-card heading={this.task.title}>
            <p>
              {this.task.description}
              <duet-checkbox 
               label={"Completed"} checked={this.task.done} onClick={(e)=>{
               const updatedTask = {...this.task, done:e.target.checked}
                this.updateTask(updatedTask);
              }}></duet-checkbox>
            </p>
          </duet-card>
        ) : (
          <duet-heading level="h3" visual-level="h0">
            No Task
          </duet-heading>
        )}
      </div>
    );
  }
}
