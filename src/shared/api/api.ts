import axios from "axios";

export const baseURL = "http://localhost:3001";

export enum METHODS {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
