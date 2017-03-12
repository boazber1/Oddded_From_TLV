/**
 * Created by Boaz on 12/03/2017.
 */
(function(){
    "use strict";

    let model = angular.module("psMovies");

    model.component("movieApp", {
       template: "/ps-movies/movie-app.component.html",
       $routeConfig: [
           {path : "/list", component: "movieList", name: "List"},
           {path : "/about", component: "appAbout", name: "About"},
           {path: "/**", redirectTo : ["List"]}

       ]
    });

}());