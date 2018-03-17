var helper = require('./helper');
describe('Catalytic home page Demo', function() {

  it('should have a title', function() {
	browser.waitForAngularEnabled(false);
	browser.driver.ignoreSynchronization = true
    browser.get('https://stg.catalyticds.com/');

    var title ='Catalytic';
     expect(browser.driver.getTitle()).toEqual(title);

    });

      it('should SignIn', function () {
		browser.waitForAngularEnabled(false);
		browser.driver.ignoreSynchronization = true
        browser.driver.get('https://stg.catalyticds.com/');
        //var goToSigninButton = element(by.linkText('SIGN IN'));
        //goToLoginButton.click();
        //element(by.id('cs-log-in')).click();

		//browser.driver.wait(function() {
		//return browser.driver.findElement(by.id('cs-log-in'))
          //    .then(function(elem) {
            //    elem.click();
              //  return true;
              //});
  //}, 100000);


		var SignInButton=browser.driver.findElement(by.id('cs-log-in'));
        SignInButton.click();

		browser.sleep(10000);

        //helper.waitUntilReady();

        var username_text=browser.driver.findElement(by.id('cat-login-email'));
        username_text.sendKeys('');

        var password_text=browser.driver.findElement(by.id('cat-login-password'));
        password_text.sendKeys('');

      var SignInButton=browser.driver.findElement(by.className('login-label'));
        SignInButton.click();

      browser.sleep(20000);

 //afterEach(function () {
   // browser.ignoreSynchronization = false;
  //})



      });




  });
