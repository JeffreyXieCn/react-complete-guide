import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTask, getAllTasks } from "./tasks-api";

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
