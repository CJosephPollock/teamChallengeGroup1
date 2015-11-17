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
        if (password.value == confirmPassword.value) {
            //The passwords match.
            //Set the color to noColor and inform
            //the user that they have entered the correct password
            confirmPassword.style.backgroundColor = noColor;
            message.style.color = noColor;
                    // message.innerHTML = "Passwords Match!"
        } else {
            //The passwords do not match.
            //Set the color to the red color and
            //Set the color to the red color and
            //notify the user.
            confirmPassword.style.backgroundColor = redColor;
            message.style.color = redColor;
            message.innerHTML = "Passwords Do Not Match!"
        }
    }

angular.module('formSubmission', [])

.controller('formCtrl', ['$scope', function($scope) {









    function submitForm() {
        console.log("submitted!");
    }

    //Clears the forms. 
    function resetForm() {
        $scope.userForm.$setPristine();
        console.log("reste form!");

    }


}]);