'use strict';

var Nightmare = require("nightmare"),
	should = require("chai").should(),
	exec = require("child_process").exec,
	spawn = require("child_process").spawn;

exec("node ../server.js");

describe("Test Users Page", function() {
  
  this.timeout(10000);
  it("should load the page", function(done) {
    var nightmare = new Nightmare({
      show: true
    });
    nightmare
      .goto("http://localhost:3000")
      .wait("section.userRow")
      .evaluate(function () {
      	return document.title
      })
      .end()
      .then(function(title) {
        result.should.equal("Sample Project");
        done();
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  it("should display user rows", function(done) {
    var nightmare = new Nightmare({
      show: true
    });
   
    nightmare
      .evaluate(function() {
        return document.querySelector("section.userRow").length;
      })
      .end()
      .then(function(userCount) {
        userCount.should.be.above(0);
        done();
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  it("should show user info when user's name is clicked", function(done) {
  	var nightmare = new Nightmare({
  	  show:true
  	});
  	var userRows = document.querySelector("section.userRow"),
  		userDetails = document.getElementById("user-details");

  	nightmare
  	  .click(userRows[0])
  	  .wait(userDetails)
  	  .evaluate(function() {
  	  	return document.getElementById(userDetails).innerHTML
  	  })
  	  .end()
  	  .then(function (h1Title) {
  	  	h1Title.should.be("User Details");
  	  })
  	  .catch(function (err) {
  	  	console.error(err);
  	  })
  })
});