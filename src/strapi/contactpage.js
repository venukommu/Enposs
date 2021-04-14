import axios from 'axios';

//import url from 'utils/URL';
import { appConfig } from "services/config.js";

const contactpage = async ( {name, email,contactnum, message} ) => {
  const response = await axios
    .post(`${appConfig.apiURL}/emails`, {
      name: name,
      mail: email,
      contact: contactnum,
      message: message
    })
    //.catch((e) => console.log(e.response));
    .catch((e) => {
      return e.response;
    })
  return response;
};

export default contactpage;