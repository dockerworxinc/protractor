exports.config = {
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
  },

  framework:'jasmine2',
  
  specs: ['spec2.js'],
  //jasmineNodeOpts: {
    //showColors: true, // Use colors in the command line report.
  //}
};