import { Component, h, Prop, Watch } from '@stencil/core';
import { ITask } from './tasks';

@Component({ tag: 'task-component' })
export class TaskComponent {
  @Prop() task: ITask;

  @Watch('task')
  updateTask(key: string, value: any): void {
    this.task[key] = value;
  }
  render() {
    return (
      <div class="task">
        {this.task ? (
          <duet-card heading={this.task.title}>
            <p>
              {this.task.description}
              <duet-checkbox checked label={"Completed"} value={this.task.done} onClick={()=>{
                this.updateTask('done', !this.task.done);
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
