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
        $scope.showPasswordsDoNotMatch = false;
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
