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

        compass: {                  // Task

            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'sass',
                    cssDir: 'css',

                    environment: 'production',
                    outputStyle: 'compressed',
                    noLineComments: true
                },
                files: {
                    '<%= meta.root  %>/css/main.css' : '<%= meta.root  %>/scss/main.scss'
                }
            }

        },

        sass: {  // sassy css Task. Using compass instead.

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
            files: ['Gruntfile.js', './js/lib/*.js']  // libext are not under jshint
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

        // The responsive_images task will take your source image and create images at different resolutions for use

        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        name: "small",
                        width: 320
                    },{
                        name: 'medium',
                        width: 640
                    },{
                        name: 'large',
                        width: 1024
                    }]
                },


                files: [{
                    expand: true,
                    src: ['<%= meta.root  %>/img/source/**.{jpg,gif,png}'],
                    cwd: '',
                    custom_dest: 'img/size/{%= width %}/'
                }]
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
                files: ['Gruntfile.js', 'server.js', '<%= meta.root  %>/js/lib/*.js', '<%= meta.www  %>/tests/**/*.js'],
                tasks: ['compass:dist', 'jshint']
            },


            // Watch for SASS changes, building CSS directly into deployment directory.
            sass: {
                files: ['<%= meta.root %>/scss/**/*.scss'],
                tasks: ['compass:dist']
            }
        }

    });


    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-responsive-images');


    // Task definitions
    grunt.registerTask('default', ['watch', 'jshint', 'compass', 'responsive_images' ]);
};