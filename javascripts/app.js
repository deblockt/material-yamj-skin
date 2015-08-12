define([
	'routes',
	'services/dependencyResolverFor',
	'require', 
	'angular',
	'angularRoute'
],
function (config, dependencyResolverFor, require) {
	
	var app = angular.module('app', 
        [
            'ngRoute'
        ]
    );
	
	/**
	 * lazy routing configuration
	 */
    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
			// allow blob link
			$compileProvider.aHrefSanitizationWhitelist(/^\s*(blob):/);
		
        	app.controller = function(name, constructor) {
        		$controllerProvider.register(name, constructor);
        		return this;
        	}
	        app.directive  = function(name, constructor) {
	        	$compileProvider.directive(name, constructor);
	        	return this;
	        }
	        app.filter     = function(name, constructor) {
	        	$filterProvider.register(name, constructor);
	        	return this;
	        }
	        app.factory    = function(name, constructor) {
	        	$provide.factory(name, constructor);
	        	return this;
	        }
	        app.service    = function (name, constructor) {
	        	$provide.service(name, constructor);
	        	return this;
	        }

            // $locationProvider.html5Mode(true);

            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
                	// default template has the same name as the controller
                	route.templateUrl = route.templateUrl || route.controller+'.html';
                    $routeProvider.when(
                    	path, 
                    	{
                    		templateUrl:route.templateUrl,
                    		resolve:dependencyResolverFor(route.dependencies),
                    		controller : route.controller
                    	}
                	);
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
                $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }

        }
    ]);
  
	app.init = function(){
		// lancement de l'application
		angular.bootstrap(document, ['app']);
	}

	return app;
});