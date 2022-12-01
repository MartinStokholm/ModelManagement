import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7181/api",
});
