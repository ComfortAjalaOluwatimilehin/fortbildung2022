import { Component, h, State } from '@stencil/core';
export interface ITask {
  id: string;
  title: string;
  description: string;
  done: boolean;
}
@Component({ tag: 'tasks-component', styleUrl: './tasks.css' })
export class TasksComponent {
  @State() tasks: Array<ITask> = [];
  async fetchTask(): Promise<any> {
    const response = await fetch('http://localhost:1080/todos');
    const data = response.json();
    return data;
  }
  componentWillLoad() {
    if (this.tasks.length > 0) return;
    this.fetchTask().then(data => {
      if (Array.isArray(data)) {
        this.tasks = data;
      }
    });
  }
  render() {
    const sortedTasks = [...this.tasks.filter(a => a.done), ...this.tasks.filter(a => !a.done)];
    console.log(sortedTasks)
    return (
      <section class="tasks-container">
        <duet-heading level="h1" visual-level="h0">
          All Tasks
        </duet-heading>
        <duet-layout margin="none">
          <div slot="main">
            {sortedTasks.map(task => (
              <task-component task={task}></task-component>
            ))}
          </div>
        </duet-layout>
      </section>
    );
  }
}
