import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTask, deleteTask, getAllTasks } from "./tasks-api";

export const useGetAllTasks = () => {
  return useQuery("tasks", getAllTasks);
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation((payload) => createTask(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation((taskId) => deleteTask(taskId), {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};
