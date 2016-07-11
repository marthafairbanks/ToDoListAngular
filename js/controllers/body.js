(function() {
	'use strict';
	angular.module('todoAngular').controller('ToDoController', function (pullToDos){

	    	// var test = pullToDos.getToDos();
	    	// alert (test); //my factory is working

	    	// alert("My controller is working :)");
	       
		var vm = this;
		vm.toDoArray = [];

 		//loops through the array counting toDo items with isComplete = false
 		//and displays the number 
		vm.itemCount = function itemCount() {
			vm.counter = 0;
			vm.toDoArray.forEach(function(toDoArray) {
				if (toDoArray.isComplete === false) {
					vm.counter += 1;
				}
			});
		};

		//gets new to do items, adds them to the array
		vm.writeToDoArray = function writeToDoArray(){
			function assignId(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			vm.newToDo = { 
				"id": assignId(0,1000), 
				"toDoItem": vm.form.toDoItem, 
				"isComplete": false, 
			};
			
			vm.toDoArray.push(vm.newToDo);
			vm.form = [];

			vm.itemCount();			
		};

		//toggles the truthiness of the property isComplete when the 
		//checkmark button is clicked
		vm.makeCompleted = function makeCompleted(item) {
     		vm.index = vm.toDoArray.indexOf(item);
     		if (vm.toDoArray[vm.index].isComplete === false) {
     			vm.toDoArray[vm.index].isComplete = true;
     		}
     		else {
     			vm.toDoArray[vm.index].isComplete = false;
     		}

     		vm.itemCount();   			
 		};

 		//deletes the toDoItem from the toDoArray, toDoItem gets written out 
 		//on the html side through ng-repeat, calls function itemCount
		vm.deleteToDo = function deleteToDo(item) {
     		vm.index = vm.toDoArray.indexOf(item);
     		vm.toDoArray.splice(vm.index, 1);

     		vm.itemCount();
 		};			

 		//shows all, active, and completed items when their respective buttons 
 		//are clicked through a filter in ng-repeat
 		vm.showActiveCompleted = function showActiveCompleted(x){
 			vm.showActiveComplete = x;
 		};	 	
		
		//clears completed toDoArray items when the button is clicked	
 		vm.clearCompleted = function clearCompleted() {
 			vm.toDoArray.forEach(function(toDoArray) {
 				if (toDoArray.isComplete === true) {
 					vm.index = vm.toDoArray.indexOf(toDoArray);
 					vm.toDoArray.splice(vm.index, 1);
 				}
 			});
 			
 		};


	});
})();