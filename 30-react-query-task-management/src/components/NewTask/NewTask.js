import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { useCreateTask } from "../../queries/tasks/tasks-query";

const NewTask = (props) => {
  const {
    mutateAsync: createTask,
    isLoading,
    isError,
    error,
  } = useCreateTask();

  const enterTaskHandler = async (taskText) => {
    const result = await createTask({ text: taskText });
    console.log("create task result:", result);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {isError && <p>{error.message}</p>}
    </Section>
  );
};

export default NewTask;
