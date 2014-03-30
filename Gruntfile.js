module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../deploy/',
            jasmine: 'tests/jasmine/',
            root: '/Users/Leo/Documents/root/lab',
            www: '/Users/Leo/Documents/root/lab/www'

        },

        sass: {  // Task

            dist: {  // Target
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    sourcemap: false
                },
                files: {
                        '<%= meta.root  %>/css/main.css' : '<%= meta.root  %>/scss/main.scss'
                }
            }
        },

        jshint: {
            options: {
                // Specifying JSHint options and globals
                jshintrc: '.jshintrc'
            },
            files: ['Gruntfile.js', './js/**/*.js']
        },

        jasmine: {
            pivotal: {
                src: '<%= jasmine =>/src/**/*.js',
                options: {
                    specs: '<%= jasmine =>/spec/*Spec.js',
                    helpers: '<%= jasmine =>/spec/*Helper.js'
                }
            }
        },


        // watching tasks
        watch: {

            // Watch for sass changes, building CSS directly
            css: {
                // Which files to watch (all .scss files recursively in the scss directory)
                files: ['<%= meta.root  %>/scss/*.scss'],
                tasks: ['sass:dist'],
                options: {
                    nospawn: true
                }
            },

            // Watch for JS changes, linting the JS and copying direct to deployment directory.
            scripts: {
                files: ['Gruntfile.js', 'server.js', '<%= meta.www  %>/**/*.js', '<%= meta.www  %>/tests/**/*.js'],
                tasks: ['sass:dist', 'jshint']
            }
        }

    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-sass');


    // Task definitions
    grunt.registerTask('default', ['watch', 'jshint', 'sass']);
};