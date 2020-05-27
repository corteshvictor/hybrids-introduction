import axios from "axios";

const URL = "https://reqres.in/api/register";

export const registerApi = () => {
  const data = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  return axios.post(URL, data);
};
