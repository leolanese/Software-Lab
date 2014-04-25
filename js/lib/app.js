define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		// Declare app level module which depends on filters, and services
		
		return angular.module('myTestApp', [
			'ngRoute',
			'myTestApp.controllers',
			'myTestApp.filters',
			'myTestApp.services',
			'myTestApp.directives'
		]);

});
