'use strict';

const store = (function() {


  /**
   * 
   */
  function findRepoById(id) {
    
  }
    

  /**
   * add repo to list of repositories for user.
   * 
   * @param {*}  repo an element of the json response to be added to store of repos
   */
  function addRepo(repo) {
    this.repositories.push(
      {
        name: repo.name,
        url : repo.url,
      });
  }
    

  // /**
  //  * 
  //  */
  // function deleteRepo() {

  // }



  return {

    repositories: [],

    findRepoById,
    addRepo,
    // deleteRepo,

  };

})();





