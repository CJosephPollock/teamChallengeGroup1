'use strict'

describe('testing of the sign up form', function() {

	//Email Test
  it('should show text when the age is less than 13', function() {

  	browser.get('http://localhost:8000');

	var input = element(by.model('user.email'));
    input.sendKeys('123');
	expect(input.getAttribute('value')).toBe('123');
  });


  //First Name Test

  //Last Name Test

  //Birthday Test

  //Password Test

  //Confirm Password Test

  //Button Test


});

