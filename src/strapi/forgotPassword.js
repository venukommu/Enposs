import axios from 'axios';

//import url from 'utils/URL';
import { appConfig } from "services/config.js";

const forgotPassword = async ( {email} ) => {
  const response = await axios
  .post(`${appConfig.apiURL}/auth/forgot-password`, {
    email: email,
    url:
    `${appConfig.apiURL}/admin/plugins/users-permissions/auth/reset-password`,
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    return error.response;
  });
  return response;
}

export default forgotPassword;
