import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

//fetachAllUsersApi
export const fetchAllUsersApi = () => API.get(`/api/users`);
