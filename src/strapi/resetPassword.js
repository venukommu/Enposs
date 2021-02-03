import axios from 'axios';

import url from 'utils/URL';

const resetPassword = async ( {email} ) => {
  console.log(email);
  const response = await axios
    .post(`${url}/auth/reset-password`, {
      email: email,
      url: 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password',
    })
  .then(response => {
    // Handle success.
    console.log('Your user received an email');
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
  return response;
}

export default resetPassword;
