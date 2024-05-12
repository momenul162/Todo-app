import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TaskTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { fetchTasks } = useStoreActions((actions) => actions.tasks);
  const { tasks } = useStoreState((state) => state.tasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  const todos = tasks.filter((task) => task.state === "Todo");
  const inProgress = tasks.filter((task) => task.state === "In-Progress");
  const done = tasks.filter((task) => task.state === "Done");

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="flex gap-5 md:gap-10 text-3xl cursor-pointer">
        <Tab>All</Tab>
        <Tab>Todo</Tab>
        <Tab>In-Progress</Tab>
        <Tab>Done</Tab>
      </TabList>

      <div className="divider mt-0"></div>

      <TabPanel>
        <TaskList tasks={tasks} />
      </TabPanel>

      <TabPanel>
        <TaskList tasks={todos} />
      </TabPanel>

      <TabPanel>
        <TaskList tasks={inProgress} />
      </TabPanel>

      <TabPanel>
        <TaskList tasks={done} />
      </TabPanel>
    </Tabs>
  );
};

export default TaskTab;
