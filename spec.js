describe('Protractor Demo App: Multiple scenerios', function() {
  //global varriables
  var firstNumber=element(by.model('first'));
  var secondNumber=element(by.model('second'));
  var goBtn= element(by.id('gobutton'));
  var result=element(by.className('ng-binding'));
  //beforeEach: will be executed before every it block
  beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  //tc1
    it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
    });
  //tc2
    it('should add 1 and 2', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
      goBtn.click();
      expect(result.getText()).toEqual('3');
    });
    //tc3
    it('should add 4 and 6', function() {
      firstNumber.sendKeys(4);
      secondNumber.sendKeys(6);
      goBtn.click();
      expect(result.getText()).toEqual('10');
    });
    //tc4
    it('should print input value',function(){
      firstNumber.sendKeys(11);
      expect(firstNumber.getAttribute('value')).toEqual('11');
    })
  });