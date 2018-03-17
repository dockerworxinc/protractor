var helper = require('./helper');
describe('Google home page Demo', function() {

  
    
      it('should SignIn', function () {
		  
		browser.driver.ignoreSynchronization = true   
        browser.driver.get('https://www.moneycontrol.com/');
        //var goToSigninButton = element(by.linkText('SIGN IN'));
        //goToLoginButton.click();
        //element(by.id('cs-log-in')).click();


        //var SignInButton=element(by.id('search_str'));
        //SignInButton.click();
        //helper.waitUntilReady();

			
        var search_box = browser.driver.findElement(by.id('search_str'));
        search_box.sendKeys('SBI');
		
		var search_button = browser.driver.findElement(by.className('btn_black btn_search FR'));
		search_button.click()
		
		browser.sleep(100000);
		
        //var password_text=element(by.id('cat-login-password'));
        //password_text.sendKeys('GURU99');
		
	      //SignInButton.click();
        
 //afterEach(function () {
   // browser.ignoreSynchronization = false;
  //})

	

      });


      

	
  });