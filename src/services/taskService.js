import axios from "axios";

const API = "https://dreams-to-do-backend.vercel.app/api/task";

export const getTasks = (token) =>
  axios.get(API, { headers: { Authorization: `Bearer ${token}` } });

export const createTask = (taskData, token) =>
  axios.post(API, taskData, { headers: { Authorization: `Bearer ${token}` } });
export const deleteTask = (taskId, token) =>
  axios.delete(`${API}/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateTask = (taskId, taskData, token) =>
  axios.put(`${API}/${taskId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
