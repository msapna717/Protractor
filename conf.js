exports.config={
    seleniumAdress:'http://localhost:4444/wd/hub/',
    specs:['tce-spec.js'],
    //If you dont give browser name then chrome will be default browser
    multiCapabilities:[
        { browserName:'firefox'}
    ]
};
