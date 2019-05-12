'use strict';


const api = (function() {


  const BASE_GITHUB_API_URL = 'https://api.github.com';
 

  /**
   * 
   * @param {*} params which are the arguments for the github fetch query 
   * @return fetch response in JSON
   */
  function fetchGithubAPI (url) {

    // return fetch in JSON if server request is successful
    return fetch(url)
      .then( response => {
        if (!response.ok) {
          throw new Error('fetch from Github API encountered a server error');
        }
        return response.json();
      })
      .catch( error => console.log(error.message));

  }


  /**
   * 
   * @param {*} username A string that represent the github username to search for and returns a 
   * response in JSON form.
   * 
   * @returns A JSON reponse from the Github API
   */
  function getRepositories(username) {
    const usernameRepoFormat = BASE_GITHUB_API_URL + `/users/${username}/repos`;

    // potential params for type: 'all', 'owner'   --- owner is default

    // const fetchObj = {         <------ sorta like in another exercise with args required...?
    //  method: 'GET',
    //  headers,     
    //  body,
    //  }

    return fetchGithubAPI(usernameRepoFormat);
    
  }


  




  return {
    getRepositories,
  };



})();