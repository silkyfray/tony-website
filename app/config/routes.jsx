import React from 'react';
// import ReactRouter from "react-router"
import {ReactRouter, Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from "../components/Main"
import About from "../components/About"
import ProjectsContainer from "../components/ProjectsContainer"
import Contact from "../components/Contact"

var routes = (
    <Router history= {hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={ProjectsContainer} />
            <Route path="/projects" component={ProjectsContainer}/>
            <Route path="/about" component={About}/>
            {/*<Route path="/contact" component={Contact}/>*/}
        </Route>
    </Router>
);

module.exports = routes;