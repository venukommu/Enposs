import axios from 'axios';

//import url from 'utils/URL';
import { appConfig } from "services/config.js";

const resetPassword = async ( {urlLink, password, passwordConfirmation} ) => {
  const response = await axios  
  .post(`${appConfig.apiURL}/auth/reset-password`, {
    code: urlLink,
    password: password,
    passwordConfirmation: passwordConfirmation
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    return error.response;
  });
  return response;
}

export default resetPassword;
