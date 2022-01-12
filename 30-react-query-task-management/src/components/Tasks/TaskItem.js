import classes from "./TaskItem.module.css";
import { MdDelete } from "react-icons/md";
import { Stack } from "@mui/material";
import { useDeleteTask } from "../../queries/tasks/tasks-query";

const TaskItem = (props) => {
  const { id, text } = props.task;
  const { mutateAsync: deleteTask } = useDeleteTask();

  return (
    <li className={classes.task}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <span>{text}</span>
        <MdDelete
          className={classes.button}
          onClick={async () => {
            await deleteTask(id);
          }}
        />
      </Stack>
    </li>
  );
};

export default TaskItem;
