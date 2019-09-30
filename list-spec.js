describe('get list of elements', function(){
    //global varriables
  var firstNumber=element(by.model('first'));
  var secondNumber=element(by.model('second'));
  var goBtn= element(by.id('gobutton'));
  var result=element(by.className('ng-binding'));
  var history= element.all(by.repeater('result in memory'));
 beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  function add(a,b){
      firstNumber.sendKeys(a);
      secondNumber.sendKeys(b);
      goBtn.click();
  }
  it('should check history count', function(){
      add(1,2);
      add(5,6);
      add(3,8);
    expect(history.count()).toEqual(3);
  });
});