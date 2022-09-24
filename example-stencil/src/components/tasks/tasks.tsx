import { Component, h, State, Watch } from '@stencil/core';
export interface ITask {
  id: string;
  title: string;
  description: string;
  done: boolean;
}
@Component({ tag: 'tasks-component', styleUrl: './tasks.css' })
export class TasksComponent {
  @State() tasks: Array<ITask> = [];
  @State() sortedTasks: Array<ITask> = [];
  async fetchTask(): Promise<void> {
    const response = await fetch('http://localhost:1080/todos');
    const data = await response.json();
    this.tasks = data;
  }
  @Watch('tasks')
  sortTasks(): void {
    this.sortedTasks = [...this.tasks.filter(a => !a.done), ...this.tasks.filter(a => a.done)];
  }
  updateTask(updatedTask: ITask): void {
    const tasks = [...this.tasks];
    const data = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return {
          ...task,
          done: updatedTask.done,
        };
      } else return task;
    });
    this.tasks = data;
  }
  componentWillLoad() {
    if (this.tasks.length > 0) return;
    this.fetchTask();
  }
  render() {
    return (
      <section class="tasks-container">
        <duet-heading level="h1" visual-level="h0">
          All Tasks
        </duet-heading>
        <duet-heading level="h6">Mockserver</duet-heading>
        <duet-layout margin="none">
          <div slot="main">
            {this.sortedTasks.map(task => (
              <task-component
                key={task.id}
                task={task}
                updateTask={(updatedTask: ITask) => {
                  this.updateTask(updatedTask);
                }}
              ></task-component>
            ))}
          </div>
        </duet-layout>
      </section>
    );
  }
}
