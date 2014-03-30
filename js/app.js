require.config({
    "baseUrl": "js/lib",

    paths: {
        "app": "../app",

        "jquery": ['//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min', './jquery-1.8.2.min'],
        "angular": "https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min",

        'core': './core',
        'row' : './row.min'
    },

    deps: [],

    callback: function () {


    },

    // we are telling RequireJS that core has a dependency on jQuery .. so it must load jQuery first.
    shim: {

        'core': {
            deps: ['jquery', 'angular']
        },

        'ng': {
            deps: ['core']
        }

    }

});

require(['angular'], function () {


    // then bring in angular validation
    require(["core"], function() {


    });

});
