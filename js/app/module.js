(function(){
	"use strict";
	angular
		.module("presentationApp", ['ngMaterial']);

	angular
		.module("presentationApp")
			.config(config)

	function config($httpProvider){
		$httpProvider.interceptors.push('http_Interceptor');
	
	}

})();