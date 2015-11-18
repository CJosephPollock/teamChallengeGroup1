'use strict';


describe('Sign Up Page', function(){
    var lastName = element(by.model('lastName'));
    var birthday = element(by.model('birthday'));
    beforeEach(function(){
        browser.get('http://localhost:8000');
    });


    it('should show text when the age is less than 13', function() {
        var input = element(by.model('user.email'));
        input.sendKeys('123');
        expect(input.getAttribute('value')).toBe('123');
    });

    it('should show the correct tilte', function(){
        expect(browser.getTitle()).toEqual('Our cool website');
    });
    

    it('should be able to test whether the user typed in a last name', function(){        
        //Test with a valid last name input
        lastName.sendKeys('zhao');
        var actual = element(by.css('.errorLN')).getText();
        var expected = "We need to know your last name!";
        expect(actual).not.toEqual(expected);
        //Clear and test if last name input is touched but no input entered
        lastName.clear();
        lastName.sendKeys('\t');
        var actual = element(by.css('.errorLN')).getText();
        var expected = "We need to know your last name!";
        expect(actual).toEqual(expected);

        

    });
    
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


    

});
