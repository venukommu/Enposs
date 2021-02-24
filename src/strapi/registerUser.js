import axios from 'axios';

import { appConfig } from "services/config.js";

const registerUser = async ({ email, password, username },ctx) => {
  const response = await axios
    .post(`${appConfig.apiURL}/auth/local/register`, {
      username,
      email,
      password,
    })
    .catch((e) => {
    return e.response;
      //return e
    }
    );
  return response;
};

export default registerUser;
