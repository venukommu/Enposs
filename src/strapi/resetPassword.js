import axios from 'axios';

//import url from 'utils/URL';

const resetPassword = async ( {urlLink, password, passwordconfirmation} ) => {
  //const code = JSON.stringify(urlCode);
  console.log("urlCode",urlLink);
  
  const response = await axios  
  .post(`http://localhost:3000/auth/reset-password?code=${urlLink}`, {
    password: password,
    passwordconfirmation: passwordconfirmation
    //url: 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password',
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    return error.response;
  });
  return response;
}

export default resetPassword;
