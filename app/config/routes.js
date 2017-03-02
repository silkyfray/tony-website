var React = require('react');
// import ReactRouter from "react-router"
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var Main = require('../components/Main');


var routes = (
    <Router history= {hashHistory}>
        <Route path="/" component={Main}/>
    </Router>
);

module.exports = routes;