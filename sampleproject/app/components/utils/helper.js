var axios = require("axios");

var helper = {

  getUsers: function (params) {
  	console.log("running req");
    
    return axios.get("/getUsers")
      .then(function (response) {
        return JSON.parse(response.data);
      });
  }
};

module.exports = helper;
