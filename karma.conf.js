// Karma configuration
// Generated on Fri Jan 23 2015 23:45:32 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'JS/angular.min.js',
      'JS/angular-route.min.js',
      'JS/OrderFood.js',
      'test/angular-mocks.js',
      'test/*Spec.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html'],

    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: null,
      urlFriendlyName: false
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    browsers: ['Firefox'],

    plugins: [
      'karma-jasmine',
      'karma-firefox-launcher',
      'karma-html-reporter',
      'karma-script-launcher'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
