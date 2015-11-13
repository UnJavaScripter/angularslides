(function(){
	"use strict";
	
	angular
		.module("presentationApp")
			.factory("voiceFactory", voiceFactory);


	function voiceFactory($http, $q){
		var _voiceFactory_ = {};


	    _voiceFactory_.getAllFrom = function(fromThisChannel){
	      var deferred = $q.defer();
	      $http.get('http://104.215.93.21:8080/api/polls/from/' + fromThisChannel ).success(function(polls) {
	        deferred.resolve(polls);
	      }).error(function(err){
	        deferred.reject(err)
	      });
	      return deferred.promise;
	    }

	    _voiceFactory_.getOne = function(pollId){
	      var deferred = $q.defer();
	      $http.get('http://104.215.93.21:8080/api/polls/' + pollId ).success(function(poll) {
	        deferred.resolve(poll);
	      }).error(function(err){
	        deferred.reject(err)
	      });
	      return deferred.promise;
	    }


	    _voiceFactory_.createPoll = function(newPollData, channelId){
	      var deferred = $q.defer();
	      $http.post('http://104.215.93.21:8080/api/polls/' + channelId , newPollData).success(function(poll) {
	        deferred.resolve(poll);
	      }).error(function(err){
	        deferred.reject(err)
	      });
	      return deferred.promise; 
	    }

	    _voiceFactory_.updateActiveState = function(pollId, activeState){
	      var deferred = $q.defer();
	       $http.put('http://104.215.93.21:8080/api/polls/activateDeactivate/' + pollId , {activeState: !activeState}).success(function(poll) {
	        deferred.resolve(poll);
	      }).error(function(err){
	        deferred.reject(err)
	      });
	      return deferred.promise; 
	    }



		return _voiceFactory_;
	}

})();