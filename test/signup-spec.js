'use strict';

describe('Sign Up Page', function(){
    var lastName = element(by.model('lastName'));
    var birthday = element(by.model('birthday'));
    var email = element(by.model('user.email'));
    var password = element(by.model('user.password'));
    var confirmPassword = element(by.model('user.confirmPassword'));
    beforeEach(function(){
        browser.get('http://localhost:8000');
    });

    //Test validation for email input
    it('should be able to test the validation for email input', function() {
        //Test if the user touched the email input but didn't enter anything
        email.sendKeys('\t');
        var actual = element(by.css('.enterEmail')).getText();
        var expected = "We need to know your email!";
        expect(actual).toEqual(expected);
        //Clear and test no error message will show up if the user type in a valid email
        email.clear();
        email.sendKeys("ztianai@uw.edu");
        actual = element(by.css('.errorEmail')).getText();
        expected = "Enter a valid email.";
        expect(actual).not.toEqual(expected);
        //Clear and test an error message will show up if the user type in an invalid email
        email.clear();
        email.sendKeys("ztianai");
        actual = element(by.css('.errorEmail')).getText();
        expect(actual).toEqual(expected);  
    });

    //Test we have the right title
    it('should show the correct tilte', function(){
        expect(browser.getTitle()).toEqual('Sign up for our Service');
    });
    
    //Test validation for last name input
    it('should be able to test whether the user typed in a last name', function(){        
        //Test with a valid last name input
        lastName.sendKeys('zhao');
        var actual = element(by.css('.errorLN')).getText();
        var expected = "We need to know your last name!";
        expect(actual).not.toEqual(expected);
        //Clear and test if last name input is touched but no input entered
        lastName.clear();
        lastName.sendKeys('\t');
        actual = element(by.css('.errorLN')).getText();
        expect(actual).toEqual(expected);
    });

    //Test validation for birthday input
    it('should be able to test whether the user is older than 13 years old', function(){
        //Test with a vaild birthday
        birthday.sendKeys('04-07-1995');
        var actual = element(by.css('.validAge')).getText();
        var expected = "Sorry, you must be at least 13 to sign up!";
        expect(actual).not.toEqual(expected);
        //Clear and test with a invalid birthday
        birthday.clear();
        birthday.sendKeys('04-07-2014');
        actual = element(by.css('.validAge')).getText();
        expect(actual).toEqual(expected);
        //Clear and test if user touched but no input
        birthday.clear();
        birthday.sendKeys('\t');
        actual = element(by.css('.enterBirth')).getText();
        expected = "Birthday is required.";
        expect(actual).toEqual(expected);
    });

    //Test validation for password input
    it('should be able to test whether user have enter a password', function(){
        //Test if the user touched the password box but didn't enter anything, there should be a message
        password.sendKeys('\t');
        var actual = element(by.css('.enterPassword')).getText();
        var expected = "Password is required.";
        expect(actual).toEqual(expected);
        //Clear and test if the user entered a password into the box, no message should show up
        password.clear();
        password.sendKeys('123qwe');
        actual = element(by.css('.enterPassword')).getText();
        expect(actual).not.toEqual(expected);
    });

    //Test validation for confirm password input
    it('should be able to test whether user have confirm the password and have a matching pair of password', function(){
        //Test if the user touched the confirm password box but didn't enter anything, there should be a message
        confirmPassword.sendKeys('\t');
        var actual = element(by.css('.enterConfirmPassword')).getText();
        var expected = "Password is required.";
        expect(actual).toEqual(expected);
        //Clear and test if the user typed in matching passwords, then no error message should show
        confirmPassword.clear();
        password.sendKeys('123qwe');
        confirmPassword.sendKeys('123qwe');
        actual = element(by.css('.passwordMatch')).getText();
        expected = "Passwords do not match.";
        expect(actual).not.toEqual(expected);
        //Clear and test if the user typed in non matching passwords, then an error message will show
        confirmPassword.clear();
        confirmPassword.sendKeys('123123');
        actual = element(by.css('.passwordMatch')).getText();
        expect(actual).toEqual(expected);
    });
});
