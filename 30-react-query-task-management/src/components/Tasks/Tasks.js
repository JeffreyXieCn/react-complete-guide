import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";
import { useGetAllTasks } from "../../queries/tasks/tasks-query";

const transformTasks = (tasksObj) => {
  const loadedTasks = [];

  for (const taskKey in tasksObj) {
    // loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    loadedTasks.unshift({ id: taskKey, text: tasksObj[taskKey].text });
  }

  return loadedTasks;
};

const Tasks = () => {
  const { isLoading, isError, error, data, refetch } = useGetAllTasks();
  console.log(data?.length);
  console.log(data);

  let taskList = <h2>No tasks found. Start adding some!</h2>;
  let tasks = [];
  if (data) {
    tasks = transformTasks(data);
  }

  if (tasks.length > 0) {
    taskList = (
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (isError) {
    content = (
      <>
        <p>{error.message}</p>
        <button onClick={refetch}>Try again</button>
      </>
    );
  }

  if (isLoading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
