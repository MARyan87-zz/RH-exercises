# Sample Project

This project is built with React on the frontend and node express on the backend.  The basic flow is that the front end will make a request on page load.  The request will go through `app/components/utils/helper.js` with axios.  This file will then hit a route set up on the backend, which will in turn fetch the users from the API.

I have also implemented React Routing for the view. I use Angular everyday at work, so I thought it would be more fun to use something I have less experience with.  UI tests are implemented with NightmareJS, and Mocha with Chai Should library

#### To run:

1. `npm install`
2. `node server.js`
3. Open the page in your favorite browser at `localhost:3000`.

#### To test:

1. Try to run `mocha test/ui-test.js` from the root.  If you need mocha globally, run `sudo npm i -g mocha` and try `mocha test/ui-test.js` again.
