
(function(){
    
    'use strict';
	angular
		.module("presentationApp")
			.factory("http_Interceptor", http_Interceptor);


	function http_Interceptor($q){

		var interceptor = {};



        interceptor.request = function (config) {

        	config.headers.apikey = "noShaveNovember";
        	config.headers.userid = "5644f0a0cc36b7e0f8ba8342";

        	 if( !!config.url.match(/(?:104.215.93.21:8080)/g) ){
        	 	console.log(config)
        	 }

            return config || $q.when(config);
        };

        return interceptor;
    }
})();