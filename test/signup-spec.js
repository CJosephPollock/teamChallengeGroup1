'use strict';


describe('Sign Up Page', function(){
    var lastName = element(by.model('lastName'));
    var birthday = element(by.model('birthday'));
    beforeEach(function(){
        browser.get('http://localhost:8000');
    });

    it('should show the correct tilte', function(){
        
        expect(browser.getTitle()).toEqual('Our cool website');
        browser.getTitle().then(console.log);
    });
    

    it('should be able to test whether the user type in a last name', function(){

        lastName.sendKeys('zhao');
        var actual = element(by.css('.errorLN')).getText();

        var expected = "We need to know your last name!";
        expect(actual).not.toEqual(expected);
        // lastName.clear();
        // lastName.sendKeys('');
        // actual = element(by.css('.errorLN')).getText();
        // expect(actual).toEqual(expected);
        

    });
    it('should be able to test whether the user is older than 13 years old', function(){
        birthday.sendKeys('04-07-1995');
        var actual = element(by.css('.validAge')).getText();
        var expected = "Sorry, you must be at least 13 to sign up!";
        expect(actual).not.toEqual(expected);
        birthday.clear();
        birthday.sendKeys('04-07-2014');
        actual = element(by.css('.validAge')).getText();
        expect(actual).toEqual(expected);
        
    });


    

});