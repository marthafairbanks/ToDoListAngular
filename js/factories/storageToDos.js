(function () {
	'use strict';
	angular.module('toDoAngular').factory('storageToDos', function(){

    function saveToDos(){
        //save array to local storage here
        //get array from local storage here

		//var toDoArray = localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
        return null;
    }
 //    function getToDos() {
	//     var toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
	//     return toDoArray;
	// }
		
    return {
      saveToDos:saveToDos,
      // getToDos,
    };



	});
})();    