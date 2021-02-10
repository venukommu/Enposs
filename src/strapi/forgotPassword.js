import axios from 'axios';

//import url from 'utils/URL';

const forgotPassword = async ( {email} ) => {
  const response = await axios
  .post('http://localhost:1337/auth/forgot-password', {
    email: email,
    url:
    'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password',
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    return error.response;
  });
  return response;
}

export default forgotPassword;
