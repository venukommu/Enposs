import axios from 'axios';

import url from 'utils/URL';

const loginUser = async ( {email, password} ) => {
  const response = await axios
    .post(`${url}/auth/local`, {
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
