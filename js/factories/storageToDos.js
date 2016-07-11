(function () {
	'use strict';
	angular.module('toDoAngular').factory('storageToDos', function(){

    function saveToDos(toDoArray){
        //save array to local storage here
        var saveToDoArray = localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
    }
    //get array from local storage here
    function getToDos(toDoArray) {
	    var getToDoArray = JSON.parse(localStorage.getItem('toDoArray'));
      return getToDoArray;
	}
		
    return {
      saveToDos:saveToDos,
      getToDos:getToDos,
    };



	});
})();    