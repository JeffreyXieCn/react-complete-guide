import axios from "axios";

const FIREBASE_DOMAIN = "https://react-http-3be21-default-rtdb.firebaseio.com";
const TASKS_BASE_URL = FIREBASE_DOMAIN + "/tasks.json"; // remove .json to simulate error situation

export const createTask = async (payload) => {
  console.log("calling createTask()");
  const { data } = await axios.post(TASKS_BASE_URL, payload);

  return data;
};

export const deleteTask = async (taskId) => {
  console.log("calling deleteTask()");
  await axios.delete(`${FIREBASE_DOMAIN}/tasks/${taskId}.json`);
};

export const getAllTasks = async () => {
  console.log("calling getAllTasks()");
  const { data } = await axios.get(TASKS_BASE_URL);

  return data;
};
