'use strict'

//function that checks if passwords match
function checkPass() {
    //Store the password field objects into variables ...
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var noColor = "#ffffff";
    var redColor = "#ff6666";
    //Compare the values in the password field
    //and the confirmation field
    if(password.value == confirmPassword.value){
        //The passwords match.
        //Set the color to noColor and inform
        //the user that they have entered the correct password
        confirmPassword.style.backgroundColor = noColor;
        message.style.color = noColor;
//        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the red color and
        //Set the color to the red color and
        //notify the user.
        confirmPassword.style.backgroundColor = redColor;
        message.style.color = redColor;
        message.innerHTML = "Passwords Do Not Match!"
    }


//     .controller('formCtrl', ['$scope', function($scope) {
//   $scope.checkPass = function(input){
//     var message = document.getElementById('confirmMessage');
//     var date = input.date;
//     console.log(date);
//     var newDate = new Date(date);
//     console.log(newDate);
//     var min = Date.parse("November 14, 2015");
//     date = Date.parse(date);
//     console.log(date);
//     console.log(min);
//     var minutes = 1000 * 60;
//       var hours = minutes * 60;
//            var days = hours * 24;
//       var years = days * 365;
//        var y = Math.round(min / years);
//       var ynew = Math.round(date / years);
//       if(y - ynew < 13){
//         meesage.innerHTML = "Sorry, you must be at least 13 to sign up!"
//       }

// }
  


// }]);
}

angular.module('formSubmission', [])


.controller('formCtrl', ['$scope', function($scope) {

	


}]);
