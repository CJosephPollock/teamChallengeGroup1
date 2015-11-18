'use strict'
//module formSubmission
angular.module('formSubmission', [])

//controller for the module
.controller('formCtrl', ['$scope', function($scope) {
    //default values
    $scope.showPasswordsDoNotMatch = false;
    //defining submitForm
    $scope.submitForm = function() {
        //default value within scope
        $scope.submitted = true;

    }

    $scope.resetForm = function() {
        $scope.submitted = false;
        $scope.userForm.$setPristine();
        $scope.userForm.$setUntouched();
        $scope.showPasswordsDoNotMatch = false;
        $scope.userForm.birthday.$setValidity('tooyoung', true);
    }

    //function that checks if passwords match
    $scope.checkPass = function() {
        //Store the password field objects into variables ...
        var password = $scope.user.password;
        var confirmPassword = $scope.user.confirmPassword;
        //Compare the values in the password field
        if(password === confirmPassword) {
            $scope.showPasswordsDoNotMatch = false;
        } else {
            $scope.showPasswordsDoNotMatch = true;
        }
    }
    //Check if the input birthday meet the requirements
    $scope.checkBirth = function() {
    //Store birthday field objects into variables a and define them...
        var birthday = $scope.birthday;
        var birthdayDate = moment(birthday, "MM-DD-YYYY");
        var currentDate = moment();
        var difference = currentDate.diff(birthdayDate, 'years');
        //after calculating, compare the difference and show appropriate message
        $scope.userForm.birthday.$setValidity('tooyoung', true);
        if(difference < 13){
            $scope.userForm.birthday.$setValidity('tooyoung', false);
        }
    }
}]);

