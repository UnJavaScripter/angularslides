(function(){
	"use strict";
	angular
		.module("presentationApp")
			.controller("main_Ctrl", main_Ctrl);

	function main_Ctrl(voiceFactory){
		var vm = this;

		var theChannel = "5644f12acc36b7e0f8ba8343";

	    function createPoll(pollObj){
	    	var createChannel_promise = voiceFactory.createPoll(pollObj, theChannel);

		    createChannel_promise.then(function(channel){
		      vm.channel = channel;
		      console.log(vm.channel);
		    })
			.catch(function(err){
		    	vm.channels = "No pude encontrar encuestas en para ese canal \_(ツ)_/¯"
		  	})
	    }

	    vm.create_jsLvl = function(){
	    	var pollObj = {
	    		name: "Tu nivel en JavaScript",
	    		description: "¿Qué tan cómodo te sientes programando con JavaScript?",
	    		active: true,
	    		options: [
	    			{
	    				name: "Soy el @%#$tas",
	    				description: "Le doy clases a Brendan Eich"
	    			},
	    			{
	    				name: "Reeeeeeeeee bien",
	    				description: "No tengo que consultar MDN"
	    			},
	    			{
	    				name: "Más o menos",
	    				description: "Entiendo que es un 'scope' y no me pierdo haciendo referencias a 'this'"
	    			},
	    			{
	    				name: "Ahí voy",
	    				description: "Me la paso en StackOverflow mirando los métodos de Array/String/..."
	    			},
	    			{
	    				name: "Errrrmmmm",
	    				description: "¡Sé cómo hacer alerts!"
	    			},
	    			{
	    				name: "Eso es una versión pequeña de Java ¿no?",
	    				description: "Ni idea"
	    			}

	    		]
	    	}
	    	createPoll(pollObj);
	    }


	    vm.create_ngLvl = function(){
			var pollObj = {
	    		name: "Tu nivel en AngularJS",
	    		description: "¿Qué tan cómodo te sientes creando aplicaciones con AngularJS?",
	    		active: true,
	    		options: [
	    			{
	    				name: "Soy el ng-@%#$tas",
	    				description: "Le doy clases a Misko Hevery"
	    			},
	    			{
	    				name: "Reeeeeeeeee bien",
	    				description: "Me aprendí la referencia del API"
	    			},
	    			{
	    				name: "Cómodo",
	    				description: "Entiendo que es $scope y hago aplicaciones"
	    			},
	    			{
	    				name: "Ahí voy",
	    				description: "Me la paso en StackOverflow/foros/blogs entendiendo las directivas nativas"
	    			},
	    			{
	    				name: "Errrrmmmm",
	    				description: "Hice una app siguiendo un tutorial pero jummm"
	    			},
	    			{
	    				name: "¿Angular que?",
	    				description: "Ni idea"
	    			}

	    		]
	    	}
	    	createPoll(pollObj);
	    }


	}

})();