import React from "react";
import { StoreTaskList as TaskList } from "./TaskList";
import { Provider } from "mobx-react";
import { storeGenerator } from "../stores/task.store";
export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3em" }}>{story()}</div>],
  excludeStories: /.*MockedState$/,
};

export const MockedState = ({ storeState, children }) => {
  return <Provider store={storeState}>{children}</Provider>;
};
const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (story) => {
    const store = storeGenerator();
    return <MockedState storeState={store}>{story()}</MockedState>;
  },
];

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.decorators = [
  (story) => {
    const store = storeGenerator();
    return <MockedState storeState={store}>{story()}</MockedState>;
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  (story) => {
    const store = storeGenerator();
    store.toggleLoading(store);
    return <MockedState storeState={store}>{story()}</MockedState>;
  },
];
export const Empty = Template.bind({});
Empty.decorators = [
  (story) => {
    const store = storeGenerator();
    store.emptyTasks(store);
    return <MockedState storeState={store}>{story()}</MockedState>;
  },
];
