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




    //Check if the input birthday meet the requirements
    $scope.checkBirth = function() {
        var birthday = $scope.birthday;
        var birthdayDate = moment(birthday, "MM-DD-YYYY");
        var currentDate = moment();
        var difference = currentDate.diff(birthdayDate, 'years');

        $scope.userForm.birthday.$setValidity('tooyoung', true);
        if(difference < 13){
            $scope.userForm.birthday.$setValidity('tooyoung', false);
        }
    }


}]);
