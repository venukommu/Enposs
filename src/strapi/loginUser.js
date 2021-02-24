import axios from 'axios';

//import url from 'utils/URL';
import { appConfig } from "services/config.js";

const loginUser = async ( {email, password} ) => {
  const response = await axios
    .post(`${appConfig.apiURL}/auth/local`, {
      identifier: email,
      password,
    })
    //.catch((e) => console.log(e.response));
    .catch((e) => {
      return e.response;
    })
  return response;
};

export default loginUser;
