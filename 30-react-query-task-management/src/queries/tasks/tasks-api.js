import axios from "axios";

const TASKS_BASE_URL =
  "https://react-http-3be21-default-rtdb.firebaseio.com/tasks.json"; // remove .json to simulate error situation

export const createTask = async (payload) => {
  console.log("calling createTask()");
  const { data } = await axios.post(TASKS_BASE_URL, payload);

  return data;
};

export const getAllTasks = async () => {
  console.log("calling getAllTasks()");
  const { data } = await axios.get(TASKS_BASE_URL);

  return data;
};
