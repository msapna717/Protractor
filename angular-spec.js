

describe('enter name feature', function() {
    it('should enter name as sapna', function() {
      browser.get('https://angularjs.org/');
      browser.driver.sleep(3000);
      element(by.model('yourName')).sendKeys('sapna');
      browser.driver.sleep(3000);
      var expectedText= element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[2]/div[2]/div[1]/h1[1]'));
    expect(expectedText.getText()).toEqual('Hello sapna!');
    });
  });
describe('title test',function(){
it('should test page title',function(){
browser.get('https://angularjs.org/');
expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
});

  });