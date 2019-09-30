describe('login', function() {
    it('should enter username and password', function() {
      browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
      element(by.model('user.name')).sendKeys('Luke');
      element(by.model('user.password')).sendKeys('Skywalker');
      element(by.xpath("//button[contains(text(),'Login')]")).click();
      var expectedText= element(by.id('greetings'));
    expect(expectedText.getText()).toEqual('Hello Luke');
    
    });
  });