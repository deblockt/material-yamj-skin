define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                controller : 'homeController',
				templateUrl : 'home.html',
                dependencies: [
                    'controllers/homeController'
                ]
            }
        }
    };
});