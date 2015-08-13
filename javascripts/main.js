//@exclude
var testEnvironement = typeof module !== 'undefined' && this.module !== module;
//@endexclude

// warning don't change this line
var config = {
	baseUrl : '../bower_components',
	//@exclude
    urlArgs: (testEnvironement ? '' : "bust=" + (new Date()).getTime()),
	//@endexclude
	paths : {
		// configuration base dir
		services : '../javascripts/services',
		controllers : '../javascripts/controllers',
		directives : '../javascripts/directives',
		// module shortcut
		app : '../javascripts/app',
		routes : '../javascripts/routes',
		appDir : '../javascripts/',
		// lib shortcut
		angular : 'angular/angular',
		angularRoute : 'angular-route/angular-route.min',
		angularMaterial : 'angular-material/angular-material',
		angularAnimate : 'angular-animate/angular-animate',
		angularAria : 'angular-aria/angular-aria'
	},
	shim : {
		'angularRoute': {		
			deps : [
				'angular'
			],
			exports: 'angularRoute'
		},
		'angularMaterial' : {
			deps : [
				'angular',
				'angularAnimate',
				'angularAria'
			]
		},
		'angularAnimate' : {
			deps : [
				'angular'
			]
		},
		'angularAria' : {
			deps : [
				'angular'
			]
		}
	}
};

//@exclude
if (testEnvironement) {
	module.exports = config;
} else {
//@endexclude
	require.config(config);
	require(['app'], function (app) {
	  app.init();
	});	
//@exclude
}
//@endexclude
