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
<<<<<<< HEAD
=======


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
>>>>>>> 8ff49be8f3743754d1ec9ff648ad3b15f45aaa53

angular.module('formSubmission', [])

.controller('formCtrl', ['$scope', function($scope) {

<<<<<<< HEAD
=======
    $scope.submitForm = function() {
        $scope.submitted = true;
    }
>>>>>>> 8ff49be8f3743754d1ec9ff648ad3b15f45aaa53

    $scope.resetForm = function() {
        $scope.submitted = false;
        $scope.userForm.$setPristine();
    }
    

<<<<<<< HEAD






    function submitForm() {
        console.log("submitted!");
    }

    //Clears the forms. 
    function resetForm() {
        $scope.userForm.$setPristine();
        console.log("reste form!");

    }


}]);
=======
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
>>>>>>> 8ff49be8f3743754d1ec9ff648ad3b15f45aaa53
