import axios from "axios";

const API = "https://dreams-to-do-backend.vercel.app/api/auth";

export const loginUser = (data) => axios.post(`${API}/login`, data);
export const registerUser = (data) => axios.post(`${API}/register`, data);
