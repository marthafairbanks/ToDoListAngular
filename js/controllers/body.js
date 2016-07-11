(function() {
	'use strict';
	angular.module('toDoAngular').controller('ToDoController', 
	function (storageToDos){
	       
		var vm = this;
		vm.counter = 0; //needed so that 0 displays on page load
	
		vm.toDoArray = [];
		if (storageToDos.getToDos() !== null) {
			vm.toDoArray = storageToDos.getToDos();
		}

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

		//gets new to do items, adds them to the array, saves the array to local
		//storage, updates the item count, & clears the form input
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
			storageToDos.saveToDos(vm.toDoArray);
			vm.form = [];

			vm.itemCount();
	
		};

		//toggles the truthiness of the property isComplete when the 
		//checkmark button is clicked, updates item count, saves changes to 
		//local storage
		vm.makeCompleted = function makeCompleted(item) {
     		vm.index = vm.toDoArray.indexOf(item);
     		if (vm.toDoArray[vm.index].isComplete === false) {
     			vm.toDoArray[vm.index].isComplete = true;
     		}
     		else {
     			vm.toDoArray[vm.index].isComplete = false;
     		}

     		vm.itemCount();
     		storageToDos.saveToDos(vm.toDoArray);   			
 		};

 		//deletes the toDoItem from the toDoArray, toDoItem gets written out 
 		//on the html side through ng-repeat, updates item count, saves changes
 		//to local storage array
		vm.deleteToDo = function deleteToDo(item) {
     		vm.index = vm.toDoArray.indexOf(item);
     		vm.toDoArray.splice(vm.index, 1);

     		vm.itemCount();
     		storageToDos.saveToDos(vm.toDoArray);
 		};			

 		//shows all, active, and completed items when their respective buttons 
 		//are clicked through a filter in ng-repeat
 		vm.showActiveCompleted = function showActiveCompleted(x){
 			vm.showActiveComplete = x;
 		};	 	
		
		//clears completed toDoArray items when the button is clicked, updates
		//local storage	
 		vm.clearCompleted = function clearCompleted() {
 			vm.toDoArray.forEach(function(toDoArray) {
 				if (toDoArray.isComplete === true) {
 					vm.index = vm.toDoArray.indexOf(toDoArray);
 					vm.toDoArray.splice(vm.index, 1);
 				}
 			});

 			storageToDos.saveToDos(vm.toDoArray);
 			
 		};

	});
})();