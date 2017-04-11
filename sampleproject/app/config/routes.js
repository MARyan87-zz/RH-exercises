var React = require("react"),
    router = require("react-router"),
    Route = router.Route,
    Router = router.Router,
    hashHistory = router.hashHistory,
    IndexRoute = router.IndexRoute;

//Components
var Main = require("../components/Main");
var Users = require("../components/Users");
var Details = require("../components/Details");

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="users" component={Users} />
      <Route path="details/:username" component={Details} />
      <IndexRoute component={Users} />
    </Route>
  </Router>
);
