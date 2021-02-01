import axios from 'axios';

import url from 'utils/URL';

const registerUser = async ({ email, password, username },ctx) => {
  const response = await axios
    .post(`${url}/auth/local/register`, {
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
