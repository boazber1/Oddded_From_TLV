(function() {
    "use strict";

    let model = angular.module("psMovies", ["ngComponentRouter"]);// maybe something else

    // model.config(function($routeProvider) { took it off due to more advanced technology using the above ngComponentRouter
    //     $routeProvider
    //         .when("/list", {template: "<movie-list></movie-list>"})
    //         .when("/about", {template: "<app-about></app-about>"})
    //         .otherwise({redirectTo: "/list"})
    // });

    model.value("$routerRootComponent", "movieApp");

    model.component("appAbout",{
        template: "This is about page"
    });

}());