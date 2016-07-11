'use strict';

(function () {
angular.module('todoAngular').factory('pullToDos', function(){

    function getToDos(){
        var testMessage = "my factory works!";
        //save array to local storage here
        //get array from local storage here
        return testMessage;
    }

    return {
      getToDos,
    }
});
})();    