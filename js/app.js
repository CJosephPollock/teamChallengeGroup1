'use strict'




angular.module('formSubmission', [])

.controller('formCtrl', ['$scope', function($scope) {

    $scope.showPasswordsDoNotMatch = false;

    $scope.submitForm = function() {
        $scope.submitted = true;
    }

    $scope.resetForm = function() {
        $scope.submitted = false;
        $scope.userForm.$setPristine();
    }


    //function that checks if passwords match
    $scope.checkPass = function() {
        //Store the password field objects into variables ...
        var password = $scope.user.password;
        var confirmPassword = $scope.user.confirmPassword;

        if(password === confirmPassword) {
            $scope.showPasswordsDoNotMatch = false;
        } else {
            $scope.showPasswordsDoNotMatch = true;
        }

        //Store the Confimation Message Object ...
        // var message = document.getElementById('confirmMessage');
        // //Set the colors we will be using ...
        // var noColor = "#ffffff";
        // var redColor = "#ff6666";
        // //Compare the values in the password field
        // //and the confirmation field
        // if (password.value == confirmPassword.value) {
        //     //The passwords match.
        //     //Set the color to noColor and inform
        //     //the user that they have entered the correct password
        //     confirmPassword.style.backgroundColor = noColor;
        //     message.style.color = noColor;
        //             // message.innerHTML = "Passwords Match!"
        // } else {
        //     //The passwords do not match.
        //     //Set the color to the red color and
        //     //Set the color to the red color and
        //     //notify the user.
        //     confirmPassword.style.backgroundColor = redColor;
        //     message.style.color = redColor;
        //     message.innerHTML = "Passwords Do Not Match!"
        // }
    }





}]);
 function checkBirth() {
    var birthday = document.getElementById('birthday');

        
        var birthdayDate = moment(birthday.value, "MM-DD-YYYY");
        var currentDate = moment();
        
       
        var difference = currentDate.diff(birthdayDate, 'years');
        var alert = document.getElementById('validAge');

       
        if(difference >= 13){
           
            alert.style.color= "#ffffff";
            alert.innerHTML = "valid";
        }else{
            
            alert.style.color="#ff6666";
            alert.innerHTML = "Sorry, you must be at least 13 to sign up!";
        }
    }
