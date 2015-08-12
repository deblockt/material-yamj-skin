define(['app'], function(app){
	
	app.factory('templatePreloader', ['$http', '$injector', '$templateCache' , function($http, $injector, $templateCache){
		return function(templateUrl){
			$http.get(templateUrl, {cache: $templateCache}).then(function (result) {
			  return result.data;
			});
		};
	}]);    
});