describe('tce app protractor demo',function(){
    var logo=element(by.xpath("//img[@src='assets/images/tataClassEdge.homePage.png']"));
    var userid=element(by.xpath("//input[@placeholder='UserID']"));
    var password=element(by.xpath("//input[@placeholder='Password']"));
    var signInBtn=element(by.xpath("//button[@class='signin_button_login signInEnable']//p[contains(text(),'Sign In')]"));
    var chooseAClass=element(by.xpath("//div[@class='title-text']|//div[contains(text(),' Choose a class ')]"));
    
    beforeEach(function(){
        browser.get('http://tce-teacher.azurewebsites.net/login?cmode=1');
    });
    //TC-1
    it('should validate title',function(){
expect(browser.getTitle()).toEqual('TceTeacher');
    });
    //TC-2
    it('should validate logo',function(){
expect(logo.isPresent()).toBe(true);
    });
    //TC-3
    it('should login successfully',function(){
        browser.waitForAngularEnabled(false);
        userid.sendKeys('school.admin');
        password.sendKeys('classedge');
        signInBtn.click();
        browser.driver.sleep(3000);
        expect(chooseAClass.isPresent()).toBe(true);
        
    });
});