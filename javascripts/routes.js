define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                controller : 'homeController',
                dependencies: [
                    'controllers/homeController'
                ]
            }
        }
    };
});