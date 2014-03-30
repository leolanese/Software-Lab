define("one", function(ko) {

    console.log('loading Module one.js');

    if (typeof (PORT) === "undefined") {
        PORT = {};
    }

    return {

        // Augmentation will create the module if it does not already exist
        PORT: (function (aug) {
            var self = this;

            // strict mode eliminates some JavaScript silent errors by changing them to throw errors
            // strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations
            'use strict';

            aug.TasksViewModel = function(){

                self.taskURI = '../json/portfolio.json';

                var viewModel = {};
                var data = $.getJSON(self.taskURI, function(data) {
                        viewModel = ko.mapping.fromJSON(data, {}, data);
                        ko.applyBindings(viewModel);
                    }
                );

                self.redirect = function(url){
                    // OOP encapsulation the functionality
                    window.location.href = url;
                },

                self.twitterBtn = function() {
                    var url = 'http://twitter.com/LeoLaneseltd/';
                    redirect(url);
                },

                self.blogBtn = function() {
                    var url = 'http://leolanese.com/blog/';
                    redirect(url);
                },

                self.githubBtn = function() {
                    var url = 'https://github.com/sirwilliam?tab=repositories';
                    redirect(url);
                },

                ko.mapping.fromJSON(data, viewModel);

            },



            aug.init = function(){
                var _this =  this;
                _this.TasksViewModel();
            }

        }(PORT)) // Loose Augmentation

    }

});



