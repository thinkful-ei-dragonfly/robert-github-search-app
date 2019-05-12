/* global $, api, store */
'use strict';

const search = (function() {


  /**
   * Receive username from input search and send to api module  
   * 
   */
  const handleSearchInput = function() {
    $('#search-form').submit('.search-github-usernames', event => {
      event.preventDefault();
      let username = event.target.username.value;

      // add each repo to the repository store
      api.getRepositories(username)
        .then(response => response.forEach(repo => store.addRepo(repo)))
        .catch(error => console.log(error.message));
    });


  };


  /**
   * 
   * 
   */
  const handleFetchResults = function() {
    
    

  };


  /**
   * 
   * 
   */
  const generateHTMLResults = function() {

    
  };


  /**
   * 
   * 
   */
  const generateRepositoryElementString = function() {
    

    
  };


  /**
   * 
   */
  const setError = function() {

  };


  /**
   * 
   */
  const generateRenderError = function() {

  
  };


  /**
   * 
   */
  const render = function() {

  };



  function initializeListeners() {
    handleSearchInput();
    handleFetchResults();
    generateRepositoryElementString();
    generateHTMLResults();
    setError();
    generateRenderError();
  }




  return {
    initializeListeners,
    render,
  };


})();



// Your team is working on an app that will help recruiters review all of a candidates information. You've been assigned to work on one feature for the app - to display a list of repos belonging to a particular GitHub handle.

// Review GitHub's API documentation for the list user repositories endpoint to understand how this endpoint works.
// Create an app and push it to GitHub.
// When you're done, submit the link to your GitHub repo at the bottom of the page.
// Requirements:
// The user must be able to search for a GitHub user handle.
// The search must trigger a call to GitHub's API.
// The repos associated with that handle must be displayed on the page.
// You must display the repo name and link to the repo URL.
// The user must be able to make multiple searches and see only the results for the current search.
// This exercise should take about an hour to complete. If you're having trouble, attend a Q&A session or reach out on Slack for help.